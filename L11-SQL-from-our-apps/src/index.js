const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'lighthouse_labs',
  password: 'admin',
});

client.connect((err) => {
  if (err) console.log('Client connection error \n', err)
})

/*
  This is an async function...
  1. CALLBACKS
*/
client.query('SELECT * FROM directors LIMIT 1 OFFSET 3', (error, response) => {
  if (error) return console.log('Error reading directors \n', error);
  client.end();
  return console.log(response.rows);
})

/*
  This is an async function...
  2. PROMISES
*/
client.query('SELECT * FROM directors')
  .then((response) => console.log(response.rows))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log('The query ended :)')
    client.end();
  });