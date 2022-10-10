const Router = require('koa-router')

const router = new Router({
  prefix: '/books'
})

const books = [
  { id: 1, name: 'Book 1', author: 'IG' },
  { id: 2, name: 'Book 2', author: 'IG' },
  { id: 3, name: 'Book 3', author: 'IG' },
  { id: 4, name: 'Book 4', author: 'IG' },
  { id: 5, name: 'Book 5', author: 'IG' }
]

router.get('/', ctx => {
  ctx.body = books
})

router.get('/:id', ctx => {
  const book = books.find(b => b.id == ctx.params.id)

  if (!book) {
    ctx.response.status = 404
    ctx.body = {
      error: 'Book not found'
    }

    return
  }

  ctx.body = book
})

router.post('/', ctx => {
  const newBook = {
    id: books.length + 1,
    name: ctx.request.body.name,
    author: ctx.request.body.author,
  }

  books.push(newBook)

  ctx.response.status = 201
  ctx.body = newBook
})

router.put('/:id', ctx => {

  const book = books.find(b => b.id == ctx.params.id)

  if (!book) {
    ctx.response.status = 404
    ctx.body = {
      error: 'Book not found'
    }

    return
  }

  book.name = ctx.request.body.name || book.name
  book.author = ctx.request.body.author || book.author

  ctx.body = book


  /*const bookIndex = books.findIndex(b => b.id == ctx.params.id)

  if (bookIndex === -1) {
    ctx.response.status = 404
    ctx.body = {
      error: 'Book not found'
    }

    return
  }

  books[bookIndex].name = ctx.request.body.name || books[bookIndex].name
  books[bookIndex].author = ctx.request.body.author || books[bookIndex].author

  ctx.body = books[bookIndex]*/
})

router.delete('/:id', ctx => {
  const bookIndex = books.findIndex(b => b.id == ctx.params.id)

  if (bookIndex === -1) {
    ctx.response.status = 404
    ctx.body = {
      error: 'Book not found'
    }

    return
  }

  books.splice(bookIndex, 1)

  ctx.response.status = 204

})



module.exports = router