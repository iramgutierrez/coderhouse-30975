const parseArgs = require('minimist')

const args = parseArgs(process.argv.slice(2))

console.log(args)

console.log(parseArgs(['-a', '1', '-b', '2', '3', '4']))

console.log(parseArgs(['--n1', '1', '--n2', '2']))

console.log(parseArgs(['-a', '1', '-b', '2', '-c', '-d']))

const options = {
  default: {
    nombre: 'Iram',
    apellido: 'Gutiérrez',
    c: false
  }
}

console.log(parseArgs(['-a', '1', '-b', '-c', '--nombre', 'Carlos'], options))

options.alias = {
  a: 'campoA',
  b: 'campoB'
}

console.log(parseArgs(['-a', '1', '-b', '-c'], options))

console.log(parseArgs(process.argv.slice(2), options))
