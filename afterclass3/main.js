const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.set('views', './views')
app.set('view engine', 'ejs')

const PORT = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

const users = [
  { name: 'Iram', lastname: 'Gutiérrez'},
  { name: 'Ariel', lastname: 'Dumpierres'},
  { name: 'Gaston', lastname: 'Lucero'},
  { name: 'Gerardo', lastname: 'Solotin'}
]


/**
 * API REST
 */
app.get('/api/users', (req, res) => {
  const users = getUsers()
  return res.json(users)
})

app.post('/api/users', (req, res) => {
  const user = req.body

  users.push(user)

  return res.json(user)
})


/**
 * MVC
 */


// Model
const getUsers = () => {
  return users
}

// Controller
const usersController = (req, res) => {
  const data = {
    users: getUsers()
  }
  return res.render('users', data)
}

const createUserController = (req, res) => {
  return res.render('createUser')
}

const addUserController = (req, res) => {
  const user = req.body

  users.push(user)

  return res.redirect('/users')
}

// View
app.get('/users', usersController)
app.get('/users/create', createUserController)
app.post('/users', addUserController)