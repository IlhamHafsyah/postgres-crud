const router = require('express').Router()
const {
  getAllNilai,
  getNilaiByNim,
  postNilai,
  updateNilai
} = require('../controllers/nilai')

router.get('/', getAllNilai)
router.get('/:id', getNilaiByNim)
router.post('/:id', postNilai)
router.patch('/:id', updateNilai)

module.exports = router
