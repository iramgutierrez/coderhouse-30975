const express = require('express')
const mascotasRouter = require('./mascotasRouter')
const personasRouter = require('./personasRouter')

const app = express()

const middlewareRoot = (req, res, next) => {
  console.log('Request recibido en ruta raiz /')
  return next()
}

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  return next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', middlewareRoot, (req, res) => {
  throw new Error('Error')
  return res.json({ status: 'ok' })
})

app.use('/mascotas', mascotasRouter)
app.use('/personas', personasRouter)

app.use('/public', express.static(__dirname + '/public'))

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    error: 'Error en servidor'
  })
})


const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))