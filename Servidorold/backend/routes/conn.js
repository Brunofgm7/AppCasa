const db = require('mysql');

const connection = db.createConnection({
    host     : 'localhost',
    database : 'backoffice_feralbyte',
    user     : 'root',
    password : 'admin',
    port: 3306,
})

module.exports = connection;