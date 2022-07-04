const ContenedorArchivo = require('../../contenedores/ContenedorArchivo')

class ProductosDAOArchivo extends ContenedorArchivo {
  constructor() {
    super('./productos.json')
  }
}

module.exports = ProductosDAOArchivo