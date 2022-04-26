/*let param = 1
console.log(typeof param)
param = 'Hola'
console.log(typeof param)*/

/*function mostrar (params) {
  console.log(`Log: ${params}`)
}*/

/*const mostrar = function (params) {
  console.log(`Log: ${params}`)
}*/

/*const mostrar = (params) => {
  console.log(`Log: ${params}`)
}*/

/*const mostrar = params => {
  console.log(`Log: ${params}`)
}*/

const mostrar = params => console.log(`Log: ${params}`)
mostrar('Hola')

const promediar = (a, b) => (a + b) / 2
console.log(promediar(4, 8))

const getPersona = name => ({ nombre: name, edad: 34 })

/*const getPersona = name => {
  return { nombre: name, edad: 34 }
}*/


console.log(getPersona('Iram'))




