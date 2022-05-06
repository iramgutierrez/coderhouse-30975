const http = require('http');
const moment = require('moment');



const server = http.createServer((req, res) => {
  const now = moment()
const theHour = now.hour();
console.log({ now, theHour });


const message = ( 
theHour >= 6 && theHour <= 12 ? "Buenos dias!" 
: theHour >= 13 && theHour <= 19 ? "Buenas tardes!"
: theHour >= 20 ? "Buenas noches!" : null
)
    res.end(`<h1>${message}</h1>`)
 })

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
 })