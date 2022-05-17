const express = require('express')
const app = express()

const { engine } = require('express-handlebars')

const engienFn = engine({
  extname: '.hbs',
  defaultLayout: `${__dirname}/views/index.hbs`,
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`
})

app.engine('hbs', engienFn)
app.set('views', './views')
app.set('view engine', 'hbs')

const alumnos = [
  { nombre: 'Adrian', apellido: 'Ramirez' },
  { nombre: 'Ariel', apellido: 'Dumpierres' },
  { nombre: 'Augusto', apellido: 'Silva' },
  { nombre: 'Brenda', apellido: 'Bernardi' },
  { nombre: 'Daniel', apellido: 'Hernandez' }
 ] 

app.get('', (req, res) => {
  const data = {
    comision: 30975,
    alumnos
  }
  return res.render('layouts/main', data)
})

app.get('/desafio', (req, res) => {
  const data = {
    nombre: 'Iram',
    apellido: 'Gutiérrez',
    edad: 33,
    email: 'iram@coderhouse.com',
    telefono: '5512345678'
  }
  return res.render('layouts/desafio', data)
})

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))
