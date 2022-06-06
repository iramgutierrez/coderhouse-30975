import express from 'express'
import { Request, Response, Express } from 'express'
import { getTime } from './lib/utils'
import Persona from './Persona'

const p: Persona = new Persona('Coder', 'House')

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send({
    time: getTime(),
    name: p.getFullName()
  })
})

const PORT:number = 8080

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
