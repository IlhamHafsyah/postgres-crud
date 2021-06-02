const router = require('express').Router()
const data = require('./routes/data')
const jurusan = require('./routes/jurusan')
const nilai = require('./routes/nilai')

router.use('/data', data)
router.use('/jurusan', jurusan)
router.use('/nilai', nilai)

module.exports = router
