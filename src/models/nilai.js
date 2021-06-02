const client = require('../config/postgres')

module.exports = {
  getAllNilaiModel: () => {
    return new Promise((resolve, reject) => {
      client.query('SELECT * FROM nilai ORDER BY nim ASC', (error, result) => {
        !error ? resolve(result.rows) : reject(new Error(error))
      })
    })
  },
  getNilaiByNimModel: (nim) => {
    return new Promise((resolve, reject) => {
      client.query(
        `SELECT * FROM nilai WHERE nim = ${nim} ORDER BY nim ASC`,
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  },
  postNilaiModel: (nim, nilai) => {
    return new Promise((resolve, reject) => {
      client.query(
        'INSERT INTO nilai (nim, kuantum, mekanika, lagrange) VALUES ($1, $2, $3, $4) RETURNING nim, kuantum, mekanika, lagrange, avg',
        [nim, nilai.kuantum, nilai.mekanika, nilai.lagrange],
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  },
  updateNilaiModel: (nim, nilai) => {
    return new Promise((resolve, reject) => {
      client.query(
        'UPDATE nilai SET kuantum = $1, mekanika = $2, lagrange = $3 WHERE nim = $4 RETURNING nim, kuantum, mekanika, lagrange, avg',
        [nilai.kuantum, nilai.mekanika, nilai.lagrange, nim],
        (error, result) => {
          !error ? resolve(result.rows) : reject(new Error(error))
        }
      )
    })
  }
}
