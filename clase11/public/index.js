const socket = io()

socket.on('mi mensaje', (data) => {
  alert(data)
  socket.emit('notificacion', 'Mensaje recibido correctamente')
})

socket.on('nuevo usuario', (data) => {
  alert(data)
})