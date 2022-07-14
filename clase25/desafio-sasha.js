const express = require('express')
const session = require('express-session')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'fahrenheit',
  resave: true,
  saveUninitialized: true
}))

const users = [];

const router = express.Router()

router.post('/register', (req, res) => {

  const { username, password } = req.body;

  const found = users.find(elem => elem.username === username);

  if (found) {
      res.json({Error: 'Ese usuario ya existe, elegí otro nombre'})
  } else {
      users.push({username: username, password: password})
      res.send('Registro exitoso')
  }   
})

router.get('/data', (req, res, next) => { 
  if (!req.session.username) {
    return res.send('Debes estar logueado para acceder a tus datos')
  }

  return next()
},(req, res) => {
  return res.send(`Nombre de usuario: ${req.session.username}`)
})

router.post('/login', (req, res) => {
 
  const { username, password } = req.body

  const found = users.find(elem => {
      return elem.username === username && elem.password === password
  });

  if (found) {
      req.session.username = username;
      res.redirect('/api/data')
  } else {
      res.json({Error: 'Usuario o contraseña inválidos'})
    }
})


router.get('/logout', (req, res) => {

    return req.session.destroy(err => {
        if (!err) {
            return res.send('Logout successfull')
        }
        return res.send({ error: err })
        }) 
   })

app.use('/api', router);

app.listen(8080, () => console.log('Running...'))