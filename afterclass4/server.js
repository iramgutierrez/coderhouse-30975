const express = require('express')
const productsRouter = require('./routers/productsRouter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ status: 'ok' }))

app.use('/api/products', productsRouter)

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo el puerto ${PORT}`))