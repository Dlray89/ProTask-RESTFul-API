// Update with your config settings.

require("dotenv").config()
module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.DB
    },
    migrations: {
        directory: './data/migrations'
    },
    seed: {
        directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};