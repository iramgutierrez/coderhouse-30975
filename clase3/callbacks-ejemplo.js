const operacion = (a, b, accion, callback) => {
  return setTimeout(() => {
    const resultado = accion(a, b)
    callback(null, resultado)
  }, 1000)
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b
const modulo = (a, b) => a % b

operacion(2, 4, multiplicacion, (err, resultado) => {
  if (err != null) {
    console.error(err)
    return
  } else {
    console.log(`El resultado es: ${resultado}`)
    console.log('A partir de aqui retomo el flujo de ejecución de mi programa')
  }
})