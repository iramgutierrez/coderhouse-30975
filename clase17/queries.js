

// Listar documentos dentro de una coleccion

db.users.find()

// Insertar un documento en una coleccion

db.users.insertOne({ "name": "Alvaro" })

db.users.insertOne({ "name": "Martha", "estudios": "ingeniero", "ingles": "alto" })

// Podemos crear variables para usarlas despues

const users = [{ name: "Ariel" }, { name: "Brenda", apellido: "Bernardi" }]

// Insertar varios documentos en una coleccion

db.users.insertMany(users)

const products = [
  { name: '', precio: 10 },
  { name: 'Coca cola', precio: 20 },
  { name: 'Agua mineral', precio: 15 },
  { name: 'Agua natural', precio: 10 }
]

db.products.insertMany(products)


