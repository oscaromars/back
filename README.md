# back
Si levanto el back y el front, lo mas probable es que sea un problema de version o  configuracion de MySQL.
en base a lo anterior, quizas sea necesario modificar los queries en el archivo  queries.js
linea 11 y linea 22,

probar con el siguiente cambio en la linea 22
( se borra RETURNING * que es requerido para postgreSQL pero Mysql podria no reconocerlo)

pool.query('INSERT INTO clientes (cedula, name, email) VALUES (?, ?, ?)', [cedula, name, email], (error, results) => {



