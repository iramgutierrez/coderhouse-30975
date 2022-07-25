const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')

const passport = require('passport')
//const LocalStrategy = require('passport-local').Strategy
const { Strategy: LocalStrategy } = require('passport-local')

const mongoose = require('mongoose')
const User = require('./models/user')

const { createHash, isValidPassword } = require('./utils')

mongoose.connect('mongodb://localhost:27017/clase25')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'qwerty',
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
app.set('view engine', 'ejs')

passport.use('login', new LocalStrategy((username, password, done) => {
  return User.findOne({ username })
    .then(user => {
      if (!user) {
        done(null, false, { message: 'Nombre de usuario incorrecto' })
      }

      if (!isValidPassword(user.password, password)) {
        return done(null, false, { message: 'Contraseña incorrecta' })
      }

      return done(null, user)
    })
    .catch(err => done(err))
}))

passport.use('signup', new LocalStrategy({
  passReqToCallback: true
}, (req, username, password, done) => {
  return User.findOne({ username })
    .then(user => {
      if (user) {
        return done(null, false, { message: 'El nombre de usuario ya existe' })
      }

      const newUser = new User()
      newUser.username = username
      newUser.password = createHash(password)
      newUser.email = req.body.email

      return newUser.save()
    })
    .then(user => done(null, user))
    .catch(err => done(err))
}))

passport.serializeUser((user, done) => {
  console.log('serializeUser')
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  console.log('deserializeUser')
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

app.get('/login', (req, res) => {
  return res.render('login', { message: req.flash('error') })
})

app.post('/login', passport.authenticate('login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/signup', (req, res) => {
  return res.render('signup', { message: req.flash('error') })
})

app.post('/signup', passport.authenticate('signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}))

app.get('/', (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }

  return res.redirect('/login')
}, (req, res) => {
  return res.json(req.user)
})


const PORT = 8080

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
