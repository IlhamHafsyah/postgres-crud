const client = require('../config/postgres')

module.exports = {
  getJurusanModel: (nim) => {
    return new Promise((resolve, reject) => {
      client.query(
        'SELECT data.nim, data.nama, jurusan.jurusan FROM data JOIN jurusan ON jurusan.nim = data.nim',
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  },
  postJurusanModel: (setData) => {
    return new Promise((resolve, reject) => {
      client.query(
        'INSERT INTO jurusan (nim, jurusan) VALUES ($1, $2) RETURNING nim, jurusan',
        [setData.nim, setData.jurusan],
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  }
}
