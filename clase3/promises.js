const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject('no se puede dividir por cero')
    } else {
      resolve(dividendo / divisor)
    }
  })
 }

 /*const dividir = (dividendo, divisor, callback) => {
  if (callback) {
    console.log('funcion invocada con callback')
    if (divisor == 0) {
      callback('no se puede dividir por cero')
    } else {
      callback(null, dividendo / divisor)
    }
  } else {
    console.log('funcion invocada sin callback, devuelve una promesa')
    return new Promise((resolve, reject) => {
      if (divisor == 0) {
        reject('no se puede dividir por cero')
      } else {
        resolve(dividendo / divisor)
      }
    })
  }
 }

 dividir(10, 2, (err, resultado) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`El resultado de la división es: ${resultado}`)
  }
 })*/

 dividir(10, 2)
  .then((resultado) => {
    console.log(`El resultado de la división es: ${resultado}`)
    //return dividir(resultado, 3)
  })
  /* .then((segundoResultado) => {
    console.log(`El segundo resultado de la división es: ${segundoResultado}`)
  }) */
  .catch((err) => {
    console.error(err)
  })


 