const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.CLEARDB_DATABASE_URL,
        port: 3306,
        user: process.env.CLEARDB_USER,
        password: process.env.CLEARDB_PASS,
        database: process.env.CLEARDB_DATABASE
    },
    pool:{min: 0,max: 8}

})

module.exports = knex;