const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'peluqueria',
  password: 'root',
  port: 5432,
})

const getClientes = (request, response) => {
  pool.query('SELECT * FROM clientes ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createCliente = (request, response) => {
  const { cedula, name, email } = request.body

  pool.query('INSERT INTO clientes (cedula, name, email) VALUES ($1, $2, $3) RETURNING *', [cedula, name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

const getCitas = (request, response) => {
  pool.query('SELECT * FROM citas ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createCita = (request, response) => {
  const { cedula, fecha, servicio } = request.body

  pool.query('INSERT INTO citas (cedula, fecha, servicio) VALUES ($1, $2, $3) RETURNING *', [cedula, fecha, servicio], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

const getAtenciones = (request, response) => {
  pool.query('SELECT * FROM atenciones ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createAtencion = (request, response) => {
  const { cedula, fecha, estado } = request.body

  pool.query('INSERT INTO atenciones (cedula, fecha, estado) VALUES ($1, $2, $3) RETURNING *', [cedula, fecha, estado], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

module.exports = {
  getClientes,
  createCliente,
  getCitas,
  createCita,
  getAtenciones,
  createAtencion,
}
