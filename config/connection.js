var mysql = require('mysql');
var helper = require('./helper');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Sasuke7013-',
    database: 'vf_db'
})

connection.connect(err => {
    if (err) console.log("Cannot connect to database.");
    else console.log("Connected to database.");
});

module.exports = connection;