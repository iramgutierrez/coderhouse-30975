

for (let i = 2; i < process.argv.length; i++) {
  const arg = process.argv[i]
  if (arg === '--help' || arg === '-h') {
    console.log('Mostrar ayuda')
    return
  }
}

/**
 * 
 {
  host: 1,
  port: 1,
  c: true
 }
 */