const cluster = require('cluster')
const http = require('http')

const numCPUs = require('os').cpus().length

console.log({ numCPUs })

if (cluster.isMaster) {
  console.log(`Nodo primario ${process.pid} corriendo`)

  for( let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} finalizado`)
  })
} else {
  console.log(`Nodo worker corriendo en el proceso ${process.pid}`)

  const PORT =process.argv[2] || 8080
  
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end(`Process: ${process.pid}`)
  }).listen(PORT)
}

