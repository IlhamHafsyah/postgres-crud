const response = require('../helper/response')
const {
  getAllDataModel,
  postDataModel,
  updateDataModel,
  deleteDataModel
} = require('../models/data')

module.exports = {
  getAllData: async (req, res) => {
    try {
      const result = await getAllDataModel()
      return response.response(res, 200, 'Success Get All Data', result)
    } catch (error) {
      return response.response(res, 400, 'Bad Request !')
    }
  },
  postData: async (req, res) => {
    try {
      const result = await postDataModel(req.body)
      return response.response(res, 200, 'Success Add Mahasiswa', result)
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request !')
    }
  },
  updateData: async (req, res) => {
    try {
      const result = await updateDataModel(req.body, req.params.id)
      return response.response(
        res,
        200,
        'Success Update Data Mahasiswa',
        result
      )
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request !')
    }
  },
  deleteData: async (req, res) => {
    try {
      await deleteDataModel(req.params.id)
      return response.response(
        res,
        200,
        `Success Delete Data Mahasiswa with nim = ${req.params.id}`
      )
    } catch (error) {
      console.log(error)
      return response.response(res, 400, 'Bad Request !')
    }
  }
}
