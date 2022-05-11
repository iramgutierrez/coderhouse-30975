const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let messages = [
  {
    id: 1,
    title: 'ok',
    message: ''
  },
  {
    id: 2,
    title: 'ko',
    message: ''
  }
]

app.get('/api/mensajes', (req, res) => {
  console.log('Request recibido')
  
  if (!req.query.title) {
    return res.json(messages)
  }

  const messagesFiltered = messages.filter(message => message.title === req.query.title)

  return res.json(messagesFiltered)
})

app.get('/api/mensajes/:id', (req, res) => {
  console.log('Request recibido')

  const id = Number(req.params.id)
  const message = messages.find(message => message.id === id)

  if (!message) {
    return res.status(404).json({
      error: 'Mensaje no encontrado'
    })
  }

  return res.json(message)
})

app.post('/api/mensajes', (req, res) => {
  console.log('POST request recibido')
  console.log({ body: req.body })

  const newMessage = req.body

  newMessage.id = messages.length + 1

  messages.push(newMessage)

  return res.status(201).json(newMessage)
})

app.put('/api/mensajes/:id', (req, res) => {
  console.log('PUT request recibido')

  const id = Number(req.params.id)
  const messageIndex = messages.findIndex(message => message.id === id)

  if (messageIndex === -1) {
    return res.status(404).json({
      error: 'Mensaje no encontrado'
    })
  }

  const body = req.body

  messages[messageIndex].title = body.title
  messages[messageIndex].message = body.message


  return res.json(messages[messageIndex])
})

app.delete('/api/mensajes/:id', (req, res) => {
  console.log('DELETE request recibido')

  const id = Number(req.params.id)
  const messageIndex = messages.findIndex(message => message.id === id)

  if (messageIndex === -1) {
    return res.status(404).json({
      error: 'Mensaje no encontrado'
    })
  }

  messages = messages.filter(message => message.id !== id)

  return res.status(204).json({})
})

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))
