import query from './db.js'

//const id = 2
//const doc = query.doc(id.toString())

try {
  //const user = await doc.set({ nombre: 'David', dni: 654321 })
  const user = await query.add({ nombre: 'Iram', dni: 123456 })

  console.log(user)
} catch (e) {
  console.log(`Error: ${e.message}`)
}