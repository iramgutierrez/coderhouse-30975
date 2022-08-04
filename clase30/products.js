const express = require('express')

const app = express()

app.get('/products', (req, res) => {
  console.log('Request to products api')
  return res.json({
    status: 'ok',
    api: 'products'
  })
})

const PORT = process.argv[2] || 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))