const fs = require('fs')

const contenido = `Esto es una prueba
Segunda linea`

const contenidoExtra = `
ESTO ES UN AGREGADO`

/*fs.promises.readFile('./test-input-promises.txt', 'utf-8')
  .then(data => {
    console.log(data)
    return fs.promises.writeFile('./test-output-promises.txt', contenido)
  })
  .then(() => {
    console.log('archivo generado')
    return fs.promises.appendFile('./test-output-promises.txt', contenidoExtra)
  })
  .then(() => {
    console.log('archivo actualizdo')
    return fs.promises.rename('./test-output-promises.txt', './test-output-promises-nuevo.txt')
  })
  .then(() => {
    console.log('archivo renombrado')
  })
  .catch(err => {
    console.err(err)
  })*/

;(async () => {
  const data = await fs.promises.readFile('./test-input-promises.txt', 'utf-8')
  console.log(data)
  await fs.promises.writeFile('./test-output-promises.txt', contenido)
})()
