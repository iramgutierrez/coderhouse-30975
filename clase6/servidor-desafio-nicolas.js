import http from "http"

let server= http.createServer(function(pet,res){ //createserver es un callback
    let hora  = new Date().getHours();
    if(hora>=6&&hora<=12) res.end({});
    if(hora>=13&&hora<=19) res.end("<h1>Buenas tardes</h1>");
    if(hora<=5||hora>=20) res.end("Buenas noches");


})


const connectedServer= server.listen(8080, ()=>{
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})