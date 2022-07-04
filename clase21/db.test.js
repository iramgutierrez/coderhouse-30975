import { usuariosFiltrados } from './db.js'

const expected = [
  { user: 'david', age: 21 },
  { user: 'juan', age: 24 }
]

const maxAge = 21

class MockDB {
  constructor (options) {
  }

  get () {
    return  [
      { user: 'david', age: 21 },
      { user: 'juan', age: 24 },
      { user: 'carlos', age: 18 },
      { user: 'jorge', age: 20 },
      { user: 'adrian', age: 17 }
    ]
  }
}

const mockDB = new MockDB()

const result = usuariosFiltrados(mockDB, maxAge)

console.log(JSON.stringify(result), JSON.stringify(expected))
if (JSON.stringify(result) === JSON.stringify(expected)) {
  console.log('test completado')
} else {
  console.log('test fallido')
}

