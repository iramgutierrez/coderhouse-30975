class DB {
  constructor (options) {
    this.model = options.model
  }

  get () {
    return this.model.find()
  }
}

const usuariosFiltrados = (db, maxAge) => {
  const users = db.get()

  const filteredUsers = users.filter(user => user.age >= maxAge)

  return filteredUsers
}

export { usuariosFiltrados }