const db = require('./db')
const userModel = require('./models/user')


db
  .then(_ => userModel.findOne({ username: 'iramgutierrez' }))
  .then(user => {
    console.log(user)
    if (!user) {
      return user
    }
    user.password = 'asdfgh'
    return user.save()
  })
  .then(console.log)
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => process.exit())