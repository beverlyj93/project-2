var mysql = require('mysql');
var helper = require('./helper');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MyMySQL93!@',
    database: 'vf_db'
})

connection.connect(err => {
    if(err) throw err;
    console.log("Connected to database.");
})

module.exports = connection;