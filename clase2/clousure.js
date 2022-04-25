function crearGritarNombre(nombre) {
  const signosDeExclamacion = '!!!'
  return function () {
      console.log(`${nombre}${signosDeExclamacion}`)
  }
}

const gritarCH = crearGritarNombre('coderhouse')

gritarCH() // muestra por pantalla: coderhouse!!!


function saludar (saludo) {
  return function (nombre) {
    return saludo + " "+ nombre
  }
}

const buenosDias = saludar("buenos dias")
const buenosNoches = saludar("buenos noches")

console.log(saludar("buenos dias")("Iram"))

console.log(buenosDias("Iram"))
console.log(buenosDias("Pablo"))
console.log(buenosNoches("Pablo"))