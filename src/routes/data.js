const router = require('express').Router()
const {
  getAllData,
  postData,
  updateData,
  deleteData
} = require('../controllers/data')

router.get('/', getAllData)
router.post('/', postData)
router.patch('/:id', updateData)
router.delete('/:id', deleteData)

module.exports = router
