class UserService {
  constructor (repository) {
    this.repository = repository
  }

  async getAll() {
    return this.repository.getAll()
  }

  async create (entity) {
    entity.createdAt = new Date()
    return this.repository.create(entity)
  }
}

module.exports = UserService