class ProductsModel {
  constructor (db){
    this.db = db
  }

  getProducts () {
    return this.db.from('products').select('*')
  }

  newProduct (data) {
    return this.db('products')
      .insert(data)
      .then(productsIds => {
        const [ productId ] = productsIds
  
        return productId
      })
  }

}

module.exports = ProductsModel