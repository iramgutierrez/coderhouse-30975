const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
  const data = {
    comision: 30975
  }
  return res.render('index', data)
})

app.get('/hello', (req, res) => {
  const data = {
    mensaje: 'Aprendiendo Pug JS'
  }
  return res.render('hello', data)
})

app.get("/datos", (req, res) => {
  const min = req.query.min;
  const nivel = req.query.nivel;
  const max = req.query.max;
  const title = req.query.title;

   res.render("datos", {min: min, nivel: nivel, max: max, title: title})
})

app.get('/message', (req, res) => {
  const data = {
    message: {
      name: 'Aprendiendo EJS'
    }
  }

  return res.render('message', data)
})

app.get('/alumnos', (req, res) => {
  const alumnos = [
    { nombre: 'Adrian', apellido: 'Ramirez' },
    { nombre: 'Ariel', apellido: 'Dumpierres' },
    { nombre: 'Augusto', apellido: 'Silva' },
    { nombre: 'Brenda', apellido: 'Bernardi' },
    { nombre: 'Daniel', apellido: 'Hernandez' },
    { nombre: 'Daniel', apellido: 'Mariño' },
    { nombre: 'David', apellido: 'Gomez' },
    { nombre: 'Esteban', apellido: 'Gonzalez' },
    { nombre: 'Federico', apellido: 'Lupis' },
    { nombre: 'Federico', apellido: 'Redondo' }
   ]
   
   const data = {
     alumnos,
     comision: 30975
   }

   return res.render('alumnos', data)
})

const personas = []

app.get('/form', (req, res) => {
  const data = {
    personas
  }
   return res.render('form', data)
})

app.post('/personas', (req, res) => {
  const persona = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
  }

  personas.push(persona)

  return res.redirect('/form')
})

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))