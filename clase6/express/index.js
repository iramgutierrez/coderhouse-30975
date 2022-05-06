const express = require('express')
const Contenedor = require('../../clase4/entregable/index')

const app = express()

const PORT = 8080

app.get('', (req, res) => {
  res.send({ mensaje: 'Hola mundo'})
})

app.get('/productos', (req, res) => {
  const contenedor = new Contenedor('productos.txt')
  contenedor.getRandom()
  res.send('Endpoint de productos')
})

app.get('/visitas', (req, res) => {
  res.send('Endpoint de visitas')
})

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on('error', (error) => console.log(`Error en servidor: ${error}`))