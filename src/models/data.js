const client = require('../config/postgres')

module.exports = {
  getAllDataModel: () => {
    return new Promise((resolve, reject) => {
      client.query('SELECT * FROM data ORDER BY nim ASC', (error, result) => {
        !error ? resolve(result.rows) : reject(new Error(error))
      })
    })
  },
  postDataModel: (setData) => {
    return new Promise((resolve, reject) => {
      client.query(
        'INSERT INTO data (nim, nama, umur) VALUES ($1, $2, $3) RETURNING nim, nama, umur',
        [setData.nim, setData.nama, setData.umur],
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  },
  updateDataModel: (setData, nim) => {
    return new Promise((resolve, reject) => {
      client.query(
        'UPDATE data SET nama = $1, umur= $2 WHERE nim = $3 RETURNING nim, nama, umur',
        [setData.nama, setData.umur, nim],
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  },
  deleteDataModel: (nim) => {
    return new Promise((resolve, reject) => {
      client.query(
        'DELETE FROM data WHERE nim = $1',
        [nim],
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  }
}
