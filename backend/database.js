const { Pool } = require('pg');

const pool = new Pool({
    host: '192.168.0.105',
    user: 'postgres',
    password: 'password',
    database: 'donations'
});

module.exports = pool;