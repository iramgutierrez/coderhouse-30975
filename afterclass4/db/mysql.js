const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'afterclass4'
  }
})

module.exports = knex