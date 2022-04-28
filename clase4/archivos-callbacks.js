const fs = require('fs')

const contenido = `Esto es una prueba
Segunda linea`

const contenidoExtra = `
ESTO ES UN AGREGADO`

fs.readFile('./test-input-callbacks.txt', 'utf-8' , (err, data) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log(data)
    fs.writeFile('./test-output-callbacks.txt', contenido, err => {
      console.log('archivo generado')
      fs.appendFile('./test-output-callbacks.txt', contenidoExtra, err => {
        console.log('archivo actualizado')
        fs.unlink('./test-output-callbacks.txt', err => {
          console.log('archivo borrado')
          fs.mkdir('./nuevacarpeta', err => {
            console.log('carpeta creada')
            fs.readdir('./', (err, nombres) => {
              console.log(nombres)
            })
          })
        })
      })
    })
  }
})