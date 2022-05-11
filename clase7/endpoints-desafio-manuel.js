app.get("/api/sumar/:num1/:num2", (req, res)=>{
  const {num1, num2}=req.params       
  res.json({suma:parseInt(num1)+parseInt(num2)})
})
app.get("/api/sumar", (req, res)=>{
  const {num1, num2}=req.query    
  let resultado=parseInt(num1)+parseInt(num2)
  res.send({suma:resultado})
})
app.get("/api/operacion/:dato", (req, res)=>{
  const numeros=req.params.dato.split("+")
  res.send({suma:parseInt(numeros[0])+parseInt(numeros[1])})
})
app.post("/api", (req,res)=>{
  res.json({message:`Ok ${req.method}`})
})
app.put("/api", (req,res)=>{
  res.json({message:`Ok ${req.method}`})
})
app.delete("/api", (req,res)=>{
  res.json({message:`Ok ${req.method}`})
})