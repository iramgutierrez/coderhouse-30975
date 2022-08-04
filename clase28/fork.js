const http = require('http')
const { fork } = require('child_process')

let visitas = 0

const server = http.createServer()

const calculo = () => {
  let suma = 0
  for (i = 0; i < 6e9; i++) {
    suma += i
  }

  return suma
}

server.on('request', (req, res) => {
  const { url } = req
  
  if (url === '/calcular') {
    console.log('calcular')
    const sum = calculo()
    return res.end(`La suma es ${sum}`)
    /*onst computo = fork('./computo.js')
    computo.on('message', sum => {
      return res.end(`La suma es ${sum}`)
    })*/
  } else if (url === '/') {
    console.log('visitas')
    return res.end(`Total de visitias: ${++visitas}`)
  }
})

const PORT = process.env.PORT || 8080

server.listen(PORT, err => {
  if (err) {
    throw err
  }

  console.log(`Servidor escuchando en puerto ${PORT}`)
})