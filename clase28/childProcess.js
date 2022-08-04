const { exec, execFile, spawn } = require('child_process')

/*exec('find /.', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    return
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`)
  }

  console.error(`stdout: ${stdout}`)
})*/

/*execFile(`${__dirname}/ls.sh`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    return
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`)
  }

  console.error(`stdout: ${stdout}`)
})*/

const child = spawn('find', ['/.'])

let count = 0

child.stdout.on('data', data => {
  console.log(`stdout`, ++count)
})

child.stderr.on('data', data => {
  console.log(`stderr: ${data}`)
})