const express = require('express')
const fs = require('fs')

const app = express()

/*const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <span>Contendo estatico</span>
</body>
</html>
`

const compile = html => {
  return html.replace('estatico', 'dinamico')
}*/

app.engine('coder', (filePath, options, callback) => {
  console.log(`Vamos a renderizar la vista de ${filePath} con la data de ${JSON.stringify(options)}`)
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback(new Error(err))
    }

    const contentString = content.toString()

    console.log({ contentString })

    const rendered = contentString
      .replace('#title#', options.title)
      .replace('#message#', options.message)
      .replace('#name#', options.name)

    return callback(null, rendered)
  })
})

app.set('views', './views')
app.set('view engine', 'coder')

app.get('', (req, res) => {
  const data = { title: 'Hola', message: 'Motor de plantilla propio', name: 'Iram' }
  return res.render('index', data)
})

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))