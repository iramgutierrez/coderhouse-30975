const express = require('express')
const productsRouter = require('./routers/productosRouter')
const usersRouter = require('./routers/usuariosRouter')

const app = express()
console.log(process.env.STORAGE)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)


const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))