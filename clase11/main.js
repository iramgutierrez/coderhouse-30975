const express = require('express')
const { Server: IOServer } = require('socket.io')
const { Server: HttpServer } = require('http')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

const PORT = 8080

httpServer.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

io.on('connection', (socket) => {
  console.log('Usuario conectado', socket.id)
  socket.emit('mi mensaje', `Este es el mensaje de bienvenida desde el servidor para el usuario ${socket.id}`)

  io.sockets.emit('nuevo usuario', `Se ha conectado un nuevo cliente: ${socket.id}`)

  socket.on('notificacion', data => {
    console.log(data, socket.id)
  })
})