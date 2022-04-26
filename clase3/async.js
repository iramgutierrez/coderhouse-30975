const escribirArchivo = require('./escrArchPromise.js')

console.log('Inicio del programa')

/*escribirArchivo('hola mundo', (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('termine de escribir el archivo')
    console.log('Fin del programa')
  }
})*/

escribirArchivo('hola mundo')
  .then(r => {
    console.log('termine de escribir el archivo')
    console.log('Fin del programa')
  })
  .catch(err => {
    console.error(err)
  })

