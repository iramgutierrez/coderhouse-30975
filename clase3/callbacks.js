//const ejecutar = unaFuncion => unaFuncion()
// const saludar = () => console.log('saludos')

const ejecutar = (unaFuncion) => {
  return unaFuncion()
}

const saludar = () => {
  return console.log('saludos')
}

ejecutar(saludar)

function escribirYLoguear(texto, callbackParaLoguear) {
  // simulamos que escribimos en un archivo!
  console.log(`Simulamos escribir en un archivo el texto: ${texto}`)
  // al finalizar, ejecutamos el callback
  callbackParaLoguear('archivo escrito con éxito')
 }
 
 escribirYLoguear('hola mundo de los callbacks!', (mensajeParaLoguear) => {
  const fecha = new Date().toLocaleDateString()
  console.log(`${fecha}: ${mensajeParaLoguear}`)
  console.log('A partir de aqui podemos seguir con nuestro flujo de ejecución')
 })
 