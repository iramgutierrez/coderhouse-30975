class Persona {
  constructor (nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  static saludoCorto = 'hola'

  saludoCompleto () {
    console.log(`Buenassss, soy ${this.nombre}`)
  }

  static saludoEstatico (){
    console.log(this.saludoCorto)
  }
}

const pepe = new Persona('Pepe', 30)

console.log(pepe)

pepe.saludoCompleto()

const raul = new Persona('Raul', 25)


console.log(raul)

raul.saludoCompleto()

Persona.saludoEstatico()