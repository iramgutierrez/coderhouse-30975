const fn = (mensaje, callback) => {
  // TO DO: Escribir mensaje en algun archivo de forma asincrona
  setTimeout(() => {
    callback(null)
  }, 2000)
}

module.exports = fn