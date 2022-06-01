import b from './b.js'
//const b = require('./b')

console.log(b(7,8))

await (() => {
  console.log('Hola')
})()