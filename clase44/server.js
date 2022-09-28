const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const crypto = require('crypto')

const schema = buildSchema(`
  type Persona {
    id: ID!,
    nombre: String,
    edad: Int
  }

  input PersonaInput {
    nombre: String,
    edad: Int
  }

  type Query {
    getPersonas(campo: String, valor: String): [Persona],
    getPersona(id: ID!): Persona
  }

  type Mutation {
    createPersona(datos: PersonaInput): Persona,
    updatePersona(id: ID!, datos: PersonaInput): Persona,
    deletePersona(id: ID!): Persona,
  }
`)

class Persona { // ViewModel
  constructor (id, nombre, edad) {
    this.id = id
    this.nombre = nombre
    this.edad = edad
  }
}

const personas = []


// Resolvers

const getPersonas = ({ campo, valor }) => {
  console.log({ campo, valor })
  if (campo && valor) {
    return personas.filter(persona => persona[campo] == valor)
  }

  return personas
}

const getPersona = ({ id }) => {
  const persona = personas.find(persona => persona.id === id)

  if (!persona) {
    throw new Error('Persona not found')
  }

  return persona
}

const createPersona = ({ datos }) => {
  const id = crypto.randomBytes(10).toString('hex')

  const newPersona = new Persona(id, datos.nombre, datos.edad)

  personas.push(newPersona)

  return newPersona
}

const updatePersona = ({ id, datos}) => {

  const personaIndex = personas.findIndex(persona => persona.id === id)

  if (personaIndex === -1) {
    throw new Error('Persona not found')
  }

  personas[personaIndex].nombre = datos.nombre
  personas[personaIndex].edad = datos.edad

  return personas[personaIndex]
}

const deletePersona = ({ id }) => {
  const personaIndex = personas.findIndex(persona => persona.id === id)

  if (personaIndex === -1) {
    throw new Error('Persona not found')
  }

  const persona = personas[personaIndex]

  personas.splice(personaIndex, 1)

  return persona
  
}

const app = express()

// app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.json({
    status: 'ok'
  })
})

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: {
    getPersonas,
    getPersona,
    createPersona,
    updatePersona,
    deletePersona
  },
  graphiql: true
}))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Servidor GraphQL escuchando en el puerto ${PORT}`))