const calculo = () => {
  let suma = 0
  for (i = 0; i < 6e9; i++) {
    suma += i
  }

  return suma
}

const sum = calculo()

process.send(sum)