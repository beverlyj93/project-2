var connection = require('./connection');

var helper = {
    query: function (queryString, cb) {
        var queryString = "";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    selectAll: function (table, cb) {
        var queryString = 'SELECT * FROM ??'
        connection.query(queryString, [table], function (err,result) {
            if (err) throw err; 
                cb(result)
        });
    },
    selectOne: function (table, columnToSearch, columnValue, cb) {
        var queryString = 'SELECT * FROM ?? WHERE ?? = ?'
        connection.query(queryString, [table, columnToSearch, columnValue], function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    insertOne: function (table, columns, values, cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)'

        connection.query(queryString, [table, columns, values ], function (err,result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function (table, columnValue, columnData, cb) {
        var queryString = 'DELETE FROM ?? WHERE ?? = ?'
        connection.query(queryString, [table, columnValue, columnData], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteAll: function (table, cb) {
        var queryString = 'DELETE * FROM ??'

        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = helper;