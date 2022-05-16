import express from "express"
const {Router} = express
const router=Router()

const personas=[]
const animales=[]
let idP=0
let idM=0

router.get("/personas", (req,res)=>{
    res.json(personas)
})
router.post("/personas", (req,res)=>{
    const {nombre, apellido, edad}=req.body
    personas.push({...req.body, id:++idP})    
    res.send("Guardado")
})
router.get("/animales", (req,res)=>{
    res.json(animales)    
})
router.post("/animales", (req,res)=>{
    const {nombre, raza, edad}=req.body
    animales.push({...req.body, id:++idM})
    res.send("Guardado")
})

export default router