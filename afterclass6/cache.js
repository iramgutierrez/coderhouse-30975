const redis = require('redis')

const client = redis.createClient({
  // url: 'redis://', 
  legacyMode: true
})

client.connect()


const setProducts = (products) => {
  return client.set('products', JSON.stringify(products))
}

const getProducts = () => {
  return new Promise((resolve, reject) => {
    client.get('products', (err, value) => {
      resolve(value)
    })
  })
}

module.exports = {
  setProducts,
  getProducts
}