const ProductosDAOArchivo = require('./productos/ProductosDAOArchivo')
const ProductosDAOMemoria = require('./productos/ProductosDAOMemoria')
const UsuariosDAOArchivo = require('./usuarios/UsuariosDAOArchivo')
const UsuariosDAOMemoria = require('./usuarios/UsuariosDAOMemoria')

const getStorage = () => {
  const storage = process.env.STORAGE || 'archivo'
  
  switch (storage) {
    case 'archivo':
      return {
        products: new ProductosDAOArchivo(),
        users: new UsuariosDAOArchivo()
      }
      break
    case 'memoria':
      return {
        products: new ProductosDAOMemoria(),
        users: new UsuariosDAOMemoria()
      }
      break
    case 'mongodb':
      return {
        products: new ProductosDAOMongoDB(),
        users: new UsuariosDAOMongoDB()
      }
      break
    default:
      return {
        products: new ProductosDAOArchivo(),
        users: new UsuariosDAOArchivo()
      }
      break
  }
}

module.exports = getStorage