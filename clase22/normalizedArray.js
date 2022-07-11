const normalizr = require('normalizr')
const fs = require('fs')

const util = require('util')


function print(objeto) {
  console.log(util.inspect(objeto,false,12,true))
}

const blogposts = require('./blogposts.json')

const authorSchema = new normalizr.schema.Entity('authors')

const commentSchema = new normalizr.schema.Entity('comments')

const postSchema = new normalizr.schema.Entity('posts', {
  author: authorSchema,
  comments: [ commentSchema ]
})

const postArray = new normalizr.schema.Array(postSchema)

const normalizedBlogposts = normalizr.normalize(blogposts, postArray)

print(normalizedBlogposts)

return 
fs.promises
  .writeFile('./blogpostsNormalized.json', JSON.stringify(normalizedBlogposts, null, 2))
  .then(_ => console.log('ok'))