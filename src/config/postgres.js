require('dotenv').config()
const { Client } = require('pg')

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432
})

client.connect((error) => {
  if (error) {
    throw error
  }
  console.log('You are now connected...')
})

module.exports = client
