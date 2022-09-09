
let instance = null

class UserService {
  constructor (repository) {
    this.repository = repository
  }

  async getAll () {
    return this.repository.getAll()
  }

  async create (entity) {
    entity.createdAt = new Date()
    return this.repository.create(entity)
  }

  static getInstance (repository) {
    if (instance) {
      console.log('instancia de servicio reutilizada')
      return instance
    }

    console.log('nueva instancia de servicio')
    instance = new UserService(repository)

    return instance
  }
}

module.exports = UserService
