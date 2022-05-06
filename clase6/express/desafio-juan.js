const express = require('express');

const app = express()

let count=0

app.get("/",async (req,resp)=>{
    resp.send("<h1>Hola Mundo</h1>")
})

app.get("/visitas", (req,resp)=>{
    resp.send(`constador= ${++count}`)
})
app.get("/fyh", (req,resp)=>{
    resp.send({fyh:new Date().toLocaleString()})
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error=> console.log(`Error en servidor ${error}`))