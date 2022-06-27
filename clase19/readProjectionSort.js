const db = require('./db')
const userModel = require('./models/user')
const estudianteModel = require('./models/estudiante')


db
  .then(_ => {
    return estudianteModel.find({}, { nombre: 1, dni: 1, _id: false }).sort({ nombre: -1 })
  })
  .then(users => console.log(users))
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(process.exit)