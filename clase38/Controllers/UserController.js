class UserController {
  constructor (service) {
    this.service = service
  }

  async getAll (req, res)  {
    console.log(this)
    try {
      const items = await this.service.getAll()
      return res.json(items)
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        error: e.message
      })
    }
  }

  async create (req, res) {
    const data = req.body

  try {
    const userCreated = await this.service.create(data)
    return res.status(201).json(userCreated)
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      error: e.message
    })
  }
  }
}

module.exports = UserController