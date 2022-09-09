const express = require('express')
const userRouter = require('./Routers/UserRouter')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/clase38')
  
const app = express()

app.use(express.json())

app.use('/api/users', userRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))