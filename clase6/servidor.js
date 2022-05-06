const http = require('http')

const server = http.createServer((peticion, respuesta) => {
  const url = peticion.url
  console.log({ url })
  switch (url) {
    case '/':
      return respuesta.end('Hola Mundo')
    case '/productos':
      return respuesta.end('Endpoint de productos')
    case '/visitas':
      return respuesta.end('Endpoint de visitas')
    default:
      return respuesta.end('Endpoint no encontrado')
  }
    
  
})

const connectedServer = server.listen(8080, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${connectedServer.address().port}`)
})