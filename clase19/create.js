const db = require('./db')
const userModel = require('./models/user')

const data = {
  name: 'Juan',
  lastname: 'Perez',
  email: 'juanperez@mail.com',
  username: 'juanperez',
  password: '123456',
  otrocampo: 'otro'
}

const user = new userModel(data)

db
  .then(_ => user.save())
  .then(document => console.log('User saved', document))
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => process.exit())