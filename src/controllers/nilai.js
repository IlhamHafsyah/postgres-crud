const response = require('../helper/response')
const {
  getAllNilaiModel,
  getNilaiByNimModel,
  postNilaiModel,
  updateNilaiModel
} = require('../models/nilai')

module.exports = {
  getAllNilai: async (req, res) => {
    try {
      const result = await getAllNilaiModel()
      return response.response(res, 200, 'Success Get All Nilai', result)
    } catch (error) {
      return response.response(res, 400, 'Bad Request !')
    }
  },
  getNilaiByNim: async (req, res) => {
    try {
      const result = await getNilaiByNimModel(req.params.id)
      return response.response(
        res,
        200,
        `Success Get Nilai By Nim: ${req.params.id}`,
        result
      )
    } catch (error) {
      return response.response(res, 400, 'Bad Request !')
    }
  },
  postNilai: async (req, res) => {
    try {
      const result = await postNilaiModel(req.params.id, req.body)
      return response.response(res, 200, 'Success Post Nilai', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request !')
    }
  },
  updateNilai: async (req, res) => {
    try {
      const result = await updateNilaiModel(req.params.id, req.body)
      return response.response(res, 200, 'Success Update Nilai', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request !')
    }
  }
}
