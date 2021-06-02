require('dotenv').config()
const { Client } = require('pg')

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT
})

client.connect((error) => {
  if (error) {
    throw error
  }
  console.log('Connect to postgresSQL')
})

module.exports = client
