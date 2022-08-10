const express = require('express')

const app = express()

app.get('', (req, res) => {

  const promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('ok')
      }, 5000)
    })
  }

  return promise()
    .then(response => {
      return res.json({
        response
      })
    })

  return res.json({
    ok: true
  })
})

const PORT = 8080

app.listen(PORT)