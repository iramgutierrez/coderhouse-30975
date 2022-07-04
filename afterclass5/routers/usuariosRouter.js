const { Router } = require('express')
const getStorage = require('../daos')

const { users: storage } = getStorage()

const usersRouter = Router()

usersRouter.get('/', (req, res) => {
  return storage.findAll()
    .then(users => {
      return res.json(users)
    })  
})

usersRouter.post('/', (req, res) => {
  return storage.create(req.body)
    .then(user => {
      console.log({ user })
      return res.status(201).json(user)
    })
})

module.exports = usersRouter