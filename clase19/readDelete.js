const db = require('./db')
const userModel = require('./models/user')

db
  .then(_ => userModel.findOne({ username: 'juanperez' }))
  .then(user => {
    console.log(user)
    return user.remove()
  })
  .then(console.log)
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => process.exit())