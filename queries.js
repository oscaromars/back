const mysql = require('mysql');

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'postgres',
    password : 'root',
    database : 'peluqueria',
    port     : 3306,
});

pool.query("SELECT * FROM TABLE_NAME",(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    console.log(data);
});


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

  pool.query('INSERT INTO clientes (cedula, name, email) VALUES (?, ?, ?)', [cedula, name, email], (error, results) => {
    if (error) {
      throw error
    }
      response.status(200).json(results.rows)

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
  
  pool.query('INSERT INTO citas (cedula, fecha, servicio) VALUES (?, ?, ?)', [cedula, fecha, servicio], (error, results) => {
  
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
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

  pool.query('INSERT INTO atenciones (cedula, fecha, estado) VALUES (?, ?, ?)', [cedula, fecha, estado], (error, results) => {
    if (error) {
      throw error
    }
      response.status(200).json(results.rows)
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
