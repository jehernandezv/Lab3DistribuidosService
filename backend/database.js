const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.HOST_POSTGRESQL,
    user: process.env.USER_DB_POSTGRESQL,
    password: process.env.PASS_BD_POSTGRESQL,
    database: process.env.NAME_BD_POSTGRESQL
});

module.exports = pool;