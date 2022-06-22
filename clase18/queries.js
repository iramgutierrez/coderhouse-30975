
db.clientes.find({ name: { $eq: 'Carlos' }  })

db.clientes.find({ name: { $ne: 'Carlos' } })

db.articulos.insertMany([ { name: 'Galletas', precio: 12, stock: 100, inStore: true}, {name: 'Papas', precio: 13, stock: 50, inStore: false } ])

db.articulos.find({ inStore: { $exists: true } })

db.articulos.find({ inStore: { $exists: false } })

db.clientes.find({ name: { $in: ['Jaime', 'Carlos'] } })

db.clientes.find({ name: { $nin: ['Jaime', 'Carlos'] } })

const newClients = [
  {
    name: 'Joaquin',
    edad: 23,
    cursos: [
      'Desarrollo Web',
      'React JS',
      'Programación Backend'
    ]
  },
  {
    name: 'Alma',
    edad: 23,
    cursos: [
      'Desarrollo Web',
      'Programación Backend'
    ]
  },
  {
    name: 'Sofía',
    edad: 23,
    cursos: [
      'React JS',
      'Programación Backend'
    ]
  },
  {
    name: 'Jorge',
    edad: 23,
    cursos: [
      'Desarrollo Web',
      'React JS',
      'Programación Backend'
    ]
  }
]

db.clientes.insertMany(newClients)

db.clientes.find({ cursos: { $size: 3} })

db.clientes.find({ cursos: { $all: ['Desarrollo Web', 'React JS', 'Programación Backend'] } })

db.clientes.find({ cursos: { $elemMatch: { $eq: 'React JS' } } })

db.clientes.distinct('edad')

const benjamin = {
  name: 'Benjamin',
  edad: 25,
  direccion: {
    calle: 'XXXX',
    numero: 25,
    ciudad: 'Buenos Aires'
  }
}

db.clientes.insertOne(benjamin)

db.clientes.find({ 'direccion.ciudad': 'Buenos Aires' })

db.clientes.find({ name: /^A/})

