import db from './db.js'
import usuarioModel from './models/usuario.js'

await db

const users = await usuarioModel.find()

console.log(users)

const user = new usuarioModel({
  nombre: 'Federico', apellido: 'Perez', dni: '320118321'
})

await user.save()