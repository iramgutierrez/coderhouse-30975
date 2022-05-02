// DECLARACIÓN DE FUNCIONES
/*function suma (a, b) {
  return a + b
}

const funcAux = () => {
  console.log('Estoy dentro de la funcion auxiliar')
}

function multplicacion (a, b) {
  return a * b
}

// ASIGNACIÓN DE VARIABLES Y EJECUCIÓN DE FUNCIONES

const resultado = suma(1, 2)

console.log(resultado)

funcAux()

const producto = multplicacion(resultado, 10)

console.log(producto)*/

const process = () => {
  console.log('procesando...')
}

const delay = ret => {
  for(let i=0; i<ret*3e6; i++) {

  }
}

setTimeout(process, 3000) // no-bloquante -- Retrasa la ejecución de esta función 3s
// delay(3000) // bloqueante -- Espera a que esta función termine
console.log('Continua')



