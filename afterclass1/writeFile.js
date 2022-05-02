const fs = require('fs')

const participantes = [
  { nombre: 'Ariel', apellido: 'Dumpierres', pais: 'AR', id: 1 },
  { nombre: 'Pablo', apellido: 'Montenegro', pais: 'AR', id: 2 },
  { nombre: 'Francisco', apellido: 'Araujo', pais: 'AR', id: 3 },
  { nombre: 'David', apellido: 'Gomez', pais: 'AR', id: 4 },
  { nombre: 'Iram', apellido: 'gutiérrez', pais: 'AR', id: 5 }
]

const participantesStr = JSON.stringify(participantes, null, 2)

console.log(participantesStr)

fs.promises.writeFile('./test-afterclass.txt', participantesStr)