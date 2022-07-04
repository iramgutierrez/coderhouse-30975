const ContenedorArchivo = require('../../contenedores/ContenedorArchivo')

class UsuariosDAOArchivo extends ContenedorArchivo {
  constructor() {
    super('./usuarios.json')
  }
}

module.exports = UsuariosDAOArchivo