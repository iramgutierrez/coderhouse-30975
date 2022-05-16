const express = require('express')

const Contenedor = require('./contenedor')

const contenedor = new Contenedor('products.txt')

/* const producto = {
  "name": "Coca Cola",
  "precio": 10
}

contenedor.save(producto) */

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 8080

const serverCb = () => {
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
}

const server = app.listen(PORT, serverCb)

server.on('error', error => console.log(`Error en servidor: ${error}`))

app.get('/', (req, res) => {
  res.send(`Petición recibida a la url ${req.url} con verbo HTTP ${req.method}, lo cual forman la URI`)
})

const middlewareLog = (req, res, next) => {
  console.log(`Request recibido a las ${Date()}`)
  return next()
}

app.get('/productos', middlewareLog, async (req, res) => {
  const productos = await contenedor.getAll()
  console.log(productos)
  return res.json(productos)
})

app.post('/productos', async (req, res) => {
  const producto = req.body
  console.log(`Producto recibido con name: ${producto.name} y precio ${producto.precio}`)

  await contenedor.save(producto)

  return res.json(producto)
})