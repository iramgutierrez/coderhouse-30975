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

const mensajes = []

io.on('connection', (socket) => {
  console.log('¡Nuevo cliente conectado!')
  socket.emit('allMensajes', mensajes)

  socket.on('mensajeCliente', data => {
    mensajes.push({ socketId: socket.id, mensaje: data })
    io.sockets.emit('mensajeServidor', { socketId: socket.id, mensaje: data })
  })
})