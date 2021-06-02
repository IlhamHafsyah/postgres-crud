const response = require('../helper/response')
const { getJurusanModel, postJurusanModel } = require('../models/jurusan')

module.exports = {
  getJurusan: async (req, res) => {
    try {
      const result = await getJurusanModel()
      return response.response(res, 200, 'Success Get Jurusan', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request !')
    }
  },
  postJurusan: async (req, res) => {
    try {
      const result = await postJurusanModel(req.body)
      return response.response(res, 200, 'Success Post Jurusan', result)
    } catch (error) {
      return response.response(res, 400, 'Bad Request !')
    }
  }
}
