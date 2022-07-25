const dotenv = require('dotenv')
const path = require('path')

const mode = process.argv[2] || 'local'

const fileEnv = path.resolve(__dirname, `${mode}.env`)
console.log({ mode, fileEnv })
dotenv.config({
  path: fileEnv
})

console.log(process.env)