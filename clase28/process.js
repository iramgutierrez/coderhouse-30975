console.log(`
  Directorio actual: ${process.cwd()}
  Id del proceso: ${process.pid},
  Versión de node: ${process.version},
  Ruta del ejecutable: ${process.execPath}
  Sistema operativo: ${process.platform}
  Uso de la memoria: ${JSON.stringify(process.memoryUsage(), null, 2)}
`)

const version = Number(process.version.substring(0, 3).replace('v', ''))

if (version < 16) {
  console.log('Necesitas actualizar la versión de Node.js')
  process.exit()
}

process.on('beforeExit', code => {
  console.log(`El proceso esta a punto de finalizar: ${code}`)
})

process.on('exit', code => {
  console.log(`El proceso finalizo con código de salida: ${code}`)
})

process.on('uncaughtException', err => {
  console.log(`Excepción cachada ${err.message}`)
  throw err
})

for (let i = 0; i < 10; i++) {
  console.log(i)
  if (i === 500) {
    // process.exit()
  }
}

setTimeout(() => {
  console.log(`Log con delay de 500ms`)
}, 500)

/*try {
  nonExistsFunction()
} catch(e) {
  console.log(e.message)
}*/

// nonExistsFunction()


console.log('penultimo log')
console.log('ultimo log')