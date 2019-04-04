var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'p2lakpu0j3bo10wc',
    password: 'mznrkav5p9kqgyfs',
    database: 'x3wgrqcvk6vwptyo'
})

connection.connect(err => {
    if (err) console.log("Cannot connect to database.");
    else console.log("Connected to database.");
});

module.exports = connection;