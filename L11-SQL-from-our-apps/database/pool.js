const { Pool } = require('pg');

/*
  Instead of using a single client,
  we are going to manage a POOL OF CONNECTIONS
*/
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'lighthouse_labs',
  password: 'admin',
});

pool.connect((err) => {
  if (err) console.log('Client connection error \n', err)
});

module.exports = pool;