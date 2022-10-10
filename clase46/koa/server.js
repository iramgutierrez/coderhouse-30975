const Koa = require('koa')
const koaBody = require('koa-body')
const booksRouter = require('./books')

const app = new Koa()

app.use(koaBody())

app.use(booksRouter.routes())


const PORT = 8080

app.listen(PORT, () => console.log(`Servidor Koa escuchando en el puerto ${PORT}`))