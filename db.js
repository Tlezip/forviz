var mysql = require('mysql');

var connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE
});

module.exports = connection;