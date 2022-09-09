const BaseRepository = require('./BaseRepository')

let instance = null

class UserRepository extends BaseRepository {
  findByEmail (email) {

  }

  static getInstance (model) {
    if (instance) {
      console.log('instancia de repositorio reutilizada')
      return instance
    }

    console.log('nueva instancia de repositorio')
    instance = new UserRepository(model)

    return instance
  }
}

module.exports = UserRepository
