const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject('no se puede dividir por cero')
    } else {
      resolve(dividendo / divisor)
    }
  })
 }

 /*dividir(10, 2)
  .then((resultado) => {
    console.log(`El resultado de la división es: ${resultado}`)
  })
  .catch((err) => {
    console.error(err)
  })*/

  ;(async () => {
    try {
      const resultado = await dividir(10, 0)
      console.log(resultado)
    } catch (e) {
      console.error(e)
    }
  })()


  


 