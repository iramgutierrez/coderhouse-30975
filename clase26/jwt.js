const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PRIVATE_KEY = 'PRIVATEKEYJWT'

const users = []

const generateToken = user => {
  const token = jwt.sign({ id: user.id, username: user.username }, PRIVATE_KEY, { expiresIn: '24h' })
  return token
}

const generateLastId = () => {
  return users.length + 1
}

const jwtMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      error: 'Necesitas enviar un token'
    })
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, PRIVATE_KEY, (err, payload) => {
    console.log({ err })
    if (err) {
      return res.status(401).json({
        error: 'Necesitas enviar un token válido'
      })
    }

    console.log({ payload })

    const user = users.find(user => user.id === payload.id)

    delete user.password

    if (!user) {
      return res.status(401).json({
        error: 'El usuario no existe'
      })
    }

    req.user = user
    return next()
  })
}

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body

  const userExists = users.some(user => user.username === username)

  if (userExists) {
    return res.json({ error: 'El nombre de usuario ya existe' })
  }

  const id = generateLastId()

  const user = { id, username, email, password }

  users.push(user)

  const access_token = generateToken(user)

  return res.json({
    user,
    access_token
  })
})

app.post('/login', (req, res) => {
  const { username, password } = req.body

  const user = users.find(user => user.username === username && user.password === password)

  if (!user) {
    return res.status(401).json({ error: 'Credenciales incorectas' })
  }

  const access_token = generateToken(user)

  return res.json({
    user,
    access_token
  })

})

app.get('/profile', jwtMiddleware, (req, res) => {
  return res.json(req.user)
})

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))