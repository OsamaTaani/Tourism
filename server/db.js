// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'osama',
  host: 'localhost',
  database: 'Tourism',
  password: '549667',
  port: '5432',
});

module.exports = pool;
