class Contenedor {
  constructor(config) {
    this.knex = require('knex')(config)
  }
}

const mysqlConfig = {
  client: 'mysql',
  connection: {
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'ecommerce'
  }
}

const sqliteConfig = {
  client: 'sqlite3',
  connection: { filename: './mydb-desafio.sqlite' }
}

const mysqlContenedor = new Contenedor(mysqlConfig)
const sqliteContenedor = new Contenedor(sqliteConfig)