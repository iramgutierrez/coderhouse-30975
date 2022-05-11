//Ejercicio 1
app.get("/api/letras",(req,res)=>{
  return res.json({frase})
})
app.get("/api/frase/:num",(req,res)=>{
  const {num}=req.params
  if(isNaN(Number(num))){
      return res.json({err:"El parametro no es un numero"})
  }else if(Number(num)>=frase.length){
      return res.json({err:"El parametro esta fuera de rango"})
  }else{
      let letra=frase[Number(req.params.num)]
      return res.json({letra})
  }
})
app.get("/api/palabras/:num",(req,res)=>{
  const {num}= req.params
  let arrayPalabras=frase.split(" ")
  if(isNaN(Number(num))){
      return res.json({err:"El parametro no es un numero"})
  }else if(Number(num)>=arrayPalabras.length){
      return res.json({err:"El parametro esta fuera de rango"})
  }else{
      let palabra=arrayPalabras[Number(num)]
      return res.json({palabra})
  }
})