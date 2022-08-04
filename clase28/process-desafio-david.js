function App(args) {
  const parsedArgs = args.slice(2)
  if (!parsedArgs.length) {
    throw new Error('App requires args')
  }
  parseArgstoNumbers = function (args) {
    return args.map(function (arg) {
      return parseInt(arg)
    })
  }

  
  const numeros = parseArgstoNumbers(parsedArgs)
  return {
    datos: {
      numeros,
      promedio: numeros.reduce((a, b) => a + b) / numeros.length,
      max: Math.max(...numeros),
      min: Math.min(...numeros),
      ejecutable: process.argv[1],
      pid: process.pid,
    },
  }
}
console.log(App(process.argv))