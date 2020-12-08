

const { Pool, Client } = require('pg')
const pool = new Pool({
  host: 'localhost',
  user: 'trial',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query(querystr, (error, result) => {
    if (error) {
      console.log('there was an error', error);
    } else {
      console.log(result)
    }
  });
}


module.exports =