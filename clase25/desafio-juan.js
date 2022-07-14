const express = require('express')
const session = require('express-session')

const arrayUsers = []

const auth = (req, res, next) => {
    const { name, pass } = req.body
    arrayUsers.forEach(user => {
        if (name === user.name && pass === user.pass) {
            req.session.name===name
            return next()
        }
        return res.status(401).send('Usuario o contraseña invalidos')
    })
}

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'qwerty',
    resave: true,
    saveUninitialized: true
}))

app.post('/user', (req, res) => {
    const { name, pass } = req.body
    if(arrayUsers.some(e=>e.name===name)){
        return res.status(401).send("Ya existe un usauario con ese nombre")
    }
    arrayUsers.push({ name, pass })
    return res.json({ message: 'Usuario creado', name })
})
app.get('/login', auth, (req, res) => {
    return res.send(`Bienvenido ${session.name}`)
})
const server = app.listen(PORT, () => console.log(`Server on port: ${server.address().port}`))