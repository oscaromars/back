const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.get('/', (request, response) => {
  response.json({ Enlinea: 'Peluqeria Anita API...' })
})

app.get('/clientes', db.getClientes)
app.post('/clientes', db.createCliente)
app.get('/citas', db.getCitas)
app.post('/citas', db.createCita)
app.get('/atenciones', db.getAtenciones)
app.post('/atenciones', db.createAtencion)

app.listen(port, () => {
  console.log(`Servidor Activo ${port}.`)
})
