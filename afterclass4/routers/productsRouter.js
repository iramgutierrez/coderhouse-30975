const { Router } = require('express')
const ProductsController = require('../controllers/productsController')

const productsRouter = Router()

const productsController = new ProductsController()

const isAdminMiddleware = (req, res, next) => {
  if (req.query.admin === 'true') {
    return next()
  }

  return res.status(401).json({
    error: 'No estas autorizado a utilizar este endpoint'
  })
}

productsRouter.get('', productsController.listProducts)

productsRouter.post('', isAdminMiddleware, productsController.createProduct)

module.exports = productsRouter
