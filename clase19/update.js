const db = require('./db')
const userModel = require('./models/user')

db
  .then(_ => userModel.updateOne({
    username: 'juanperez'
  }, {
    $set: { password: 'qwerty' }
  }))
  .then(result => console.log(result))
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => process.exit())