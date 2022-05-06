const express = require (`express`);

const app = express();

const PORT = 8080;
let visitas = 0;

app.get(`/`, (req, res) =>{
    res.send(`<h1> Bienvenido al servidor express </h1>`);
})

app.get(`/visitas`, (req, res) =>{
    visitas ++;
    res.send(`la cantidad de visitas es: ${visitas}`);
})

app.get(`/fyh`, (req, res) =>{
    const  date = (new Date()).toLocaleString();
    res.send({fyh: `${date}`});
})


const server = app.listen(PORT , () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

server.on(`Error`, (error) => console.log(`Error en servidor: ${error}`));