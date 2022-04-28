const fs = require('fs')

const data = fs.readFileSync('./test-input-sync.txt', 'utf-8')

console.log(data)

const contenido = `Esto es una prueba
Segunda linea`

fs.writeFileSync('./test-output-sync.txt', contenido)

const contenidoExtra = `
ESTO ES UN AGREGADO`

fs.appendFileSync('./test-output-sync.txt', contenidoExtra)

fs.unlinkSync('./test-output-sync.txt')

try {
  const dataNoExiste = fs.readFileSync('/ruta/no/valida', 'utf-8')
  console.log(dataNoExiste)
} catch (err) {
  console.error(err.message)
}

console.log('Continuo')

