const router = require('express').Router()
const { getJurusan, postJurusan } = require('../controllers/jurusan')

router.get('/', getJurusan)
router.post('/', postJurusan)

module.exports = router
