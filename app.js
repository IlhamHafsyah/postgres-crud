const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const routesNavigation = require('./src/routesNavigation')

const app = express()
app.use(morgan('dev'))
app.use(express.static('upload'))
app.use(cors())
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization'
  )
  next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routesNavigation)

app.get('*', (request, response) => {
  response.status(404).send('Path not found !')
})

app.listen(process.env.PORT, () => {
  console.log(`Express app is listening on port ${process.env.PORT}`)
})
