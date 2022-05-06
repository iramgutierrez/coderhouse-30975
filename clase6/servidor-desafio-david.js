const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  const thisDate = (new Date()).getHours()
  if(thisDate >= 6 && thisDate < 12) {
  res.end('Buenos dias')
  }
  else if(thisDate > 12 && thisDate <= 19) {
  res.end('Buenas tardes')}
  else {
  res.end('Buenas noches')}
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})