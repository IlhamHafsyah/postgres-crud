const router = require('express').Router()
const data = require('./routes/data')

router.use('/data', data)

module.exports = router
