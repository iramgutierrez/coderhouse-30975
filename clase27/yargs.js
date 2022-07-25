const yargs = require('yargs/yargs')

const args = yargs(process.argv.slice(2))
  .alias({
    nombre: 'n'
  })
  .default({
    nombre: 'Iram',
    apellido: 'Gutiérrez'
  })
  .boolean('ayuda')
  .argv

console.log({ args })