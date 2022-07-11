const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const validatePost = () => {
  return (req, res, next) => {
      const cookie = req.body;
      if (cookie.nombre && cookie.valor && cookie.duracion && Object.keys(cookie).length === 3
      || cookie.nombre && cookie.valor && Object.keys(cookie).length === 2) {
          next()
      } else {
          res.send("Parametros incorrectos")
      }
  }
}

const validateDelete = () => {
  return (req, res, next) => {
      const name = req.params.name;
      if (name) {
          next()
      } else {
          res.send("No ingresaste el nombre de la cookie a eliminar")
      }
  }
}

app.get("/cookies", (req, res) => {
 console.log(req.cookies);
 res.send({
  cookies: req.cookies
 })
})

app.post("/newCookies", validatePost(), (req, res) => {
  const cookieObject = req.body;
  if (!cookieObject.duracion) {
      res.cookie(cookieObject.nombre, cookieObject.valor).send('Cookie set')
  } else {
      res.cookie(cookieObject.nombre, cookieObject.valor, { maxAge: cookieObject.duracion}).send('Cookie set')
    }
    
})

app.delete('/clear/:name', validateDelete(), (req, res) => {
    const cookieName = req.params.name;
    console.log(cookieName);
    res.clearCookie(cookieName).send('Cookie clear')
   })

   const PORT = 8080

   app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))