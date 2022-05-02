const fs = require('fs')

fs.promises.readFile('./test-afterclass.txt', 'utf-8')
  .then((participantesStr) => {
    const participantesObj = JSON.parse(participantesStr)
    console.log(participantesObj)
  })