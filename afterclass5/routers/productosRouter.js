const { Router } = require('express')
const getStorage = require('../daos')

const { products: storage } = getStorage()

const productsRouter = Router()

productsRouter.get('/', (req, res) => {
  return storage.findAll()
    .then(products => {
      return res.json(products)
    })  
})

productsRouter.post('/', (req, res) => {
  return storage.create(req.body)
    .then(product => {
      console.log({ product })
      return res.status(201).json(product)
    })
})


module.exports = productsRouter