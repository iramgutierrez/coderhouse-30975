const options = {
  client: 'mysql',
  connection: {
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'clase16'
  }
}

const knex = require('knex')(options)


module.exports = {
  options
}

const getProducts = () => {
  return knex.from('products')
    .select('products.*', 'categories.name as category_name')
    .join('categories', {
      'products.category_id': 'categories.id'
    })
    .then(products => {
      console.log(`Total de productos: ${products.length}`)
      return products
      // products.forEach(product => console.log(`Producto: ${product.name} con precio de $${product.price}, stock de ${product.stock} y categoría ${product.category_name}`))
    })
    .catch(err => console.log(`Error: ${err.message}`))
}

module.exports = {
  getProducts
}

