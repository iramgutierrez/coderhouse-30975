import query from './db.js'

const id = 'fAHeBenNTSJMPkLLf08I'
const doc = query.doc(id)

try {
  const user = await doc.update({ nombre: 'Iram Uriel', apellido: 'Gutiérrez' })
  console.log(user)
} catch (e) {
  console.log(`Error: ${e.message}`)
}