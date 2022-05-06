import http from "http"

const server=http.createServer((peticion, respuesta)=>{
    const date=new Date
    if(date.getHours()>=6&&date.getHours()<=12){
        respuesta.end("Buenos Dias")
    }else if(date.getHours<19){
        respuesta.end("Buenas Tardes")
    }else{
        respuesta.end("Buenas Noches")
    }

})

const connectedServer= server.listen(8080, ()=>{
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})