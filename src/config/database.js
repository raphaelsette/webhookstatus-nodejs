const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'codespace',
  host: 'localhost',
  database: 'db_webhook',
  password: '123456',
  port: 5432,
});

// teste de conexão
pool.on('connect', () => {
  console.log('Banco de dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};