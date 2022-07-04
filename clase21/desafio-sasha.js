import express from 'express'
import faker from 'faker'

faker.locale = 'es'

const app = express()

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

app.get("/test", (req, res) => {
    const objetos = [];

    for (let i = 0; i < 10; i++) {
        // objetos.push({nombre: randomElement(nombres), apellido: randomElement(apellidos), color: randomElement(colores)})
        objetos.push({nombre: faker.name.firstName(), apellido: faker.name.lastName(), color: faker.commerce.color() })
      }

    res.json({objetos})
})

const PORT = 8080

app.listen(PORT, console.log(`Servidor escuchando en el puerto ${PORT}`))