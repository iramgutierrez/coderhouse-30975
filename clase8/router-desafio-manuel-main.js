import express from "express"
import router from "./src/routes/route.js"


const app=express()

const PORT=8080


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use("/api", router)

app.get("/", (req, res)=>{
    res.sendFile("./index.html")
})

const server=app.listen(PORT, ()=>{
    console.log(`Servidor on port ${server.address().port}`)
})
server.on("error", error=> console.log(`Error en servidor ${error}`))