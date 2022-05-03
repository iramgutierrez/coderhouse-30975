class Repeticiones {
  constructor(id) {
      this.id = id
      this.valor
  }
}
const repeeticiones = []
for (let i = 0; i < 1000; i++) {
  repeeticiones.push(new Repeticiones(Math.floor(Math.random() * (20 - 0)) + 0))
}

function calcularRepeticiones() {
  repeeticiones.forEach(e => {
      let id = e.id
      let result = repeeticiones.filter((e => e.id == id))
      e.valor = result.length
  })
}

calcularRepeticiones()
console.log(repeeticiones)