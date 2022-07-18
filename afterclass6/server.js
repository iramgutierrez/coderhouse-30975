const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const { getProducts } = require('./db')
const cache = require('./cache')

const app = express()


app.use(express.static('./public'))
app.use(session({
  store: MongoStore.create({
    mongoUrl: `mongodb://localhost:27017/afterclass6`,
    ttl: 30000,
  }),
  secret: 'qwerty',
  resave: true,
  saveUninitialized: true,
}))

app.set('view engine', 'ejs')

const PORT =8080

app.get('/session', (req, res) => {
  return res.json(req.session)
})

app.get('/logout', (req, res) => {
  const name = req.session.user.name
  return req.session.destroy(err => {
    if (!err) {
      return res.send({ logout: true })
    }

    return res.render('logout', { name: name })
  })
  
})


app.get('/products', (req, res) => {

  let createCache = false

  return cache.getProducts()
    .then(productsCache => {
      console.log('products desde cache', productsCache)

      if (productsCache === null) {
        createCache = true
        return getProducts()
      }
      return JSON.parse(productsCache)
    })
    .then(products => {
      if (createCache) {
        console.log('createCache')
        cache.setProducts(products)
      }
      
      console.log('products finales', products)
      return res.json(products)
    })
  
})

app.listen(PORT, () => console.log(`Running...`))