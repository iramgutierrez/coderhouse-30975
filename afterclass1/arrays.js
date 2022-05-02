[1, 2, 3, 4, 5]
['uno', 'dos', 'tres']


const participantes = [{
  nombre: 'Ariel'
}, {
  nombre: 'Pablo'
}, {
  nombre: 'Francisco'
}, {
  nombre: 'David'
}, {
  nombre: 'Iram'
}]

/*for (let i = 0; i < participantes.length; i++) {
  const participante = participantes[i]
  console.log(participante)
}*/

/*participantes.forEach((element) => {
  console.log(element.nombre)
})*/

const apellidos = {
  Iram: 'gutiérrez',
  Ariel: 'Dumpierres',
  Francisco: 'Araujo',
  David: 'Gomez',
  Pablo: 'Montenegro'
}


const mappedParticipantes = participantes.map((element, index) => {
  const nombre = element.nombre
  return nombre
})

console.log(mappedParticipantes)

const participantesFullNames = participantes.map((element, index) => {
  const id = index + 1
  const apellido = apellidos[element.nombre]
  element.apellido = apellido
  element.pais = 'AR'
  element.id = id
  return element
})

console.log(participantesFullNames)

const id = 3

const participante = participantesFullNames.find((element, index) => {
  const isMatch = element.id === id
  return isMatch
})

console.log(participante)

const participanteIndex = participantesFullNames.findIndex((element) => {
  const isMatch = element.id === id
  return isMatch
})

console.log(participanteIndex)

const participantesFiltered = participantesFullNames.filter((element) => {
  /*if (element.nombre.length >= 5) {
    return true
  } else {
    return false
  }*/
  return element.nombre.length >= 5
})

// const participantesFiltered = participantesFullNames.filter(element => element.nombre.length >= 5)

console.log(participantesFiltered)

const hasParticipantesG = participantesFullNames.some((element) => {
  const apellido = element.apellido
  const firstLetter = apellido[0].toUpperCase()
  return firstLetter === 'G'
})

console.log(hasParticipantesG)

const allFromAR = participantesFullNames.every((element) => {
  return element.pais === 'AR'
})

console.log(allFromAR)