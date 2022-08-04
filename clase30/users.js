const express = require('express')

const app = express()

app.get('/users', (req, res) => {
  console.log('Request to users api')
  return res.json({
    status: 'ok',
    api: 'users'
  })
})

const PORT = process.argv[2] || 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))