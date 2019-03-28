var connection = require('./connection');

var helper = {
    query: (data, cb) => {
        connection.query(data, result => {
            cb(result);
        });
    },
    selectAll: (table, cb) => {
        connection.query(`SELECT * FROM ${table};`, result => {
            cb(result);
        });
    },
    selectOne: (column, table, modifier, value) => {
        connection.query(`SELECT ${column} FROM ${table} WHERE ${modifier} = '${value}';`, result => {
            cb(result);
        });
    }
}

module.exports = helper;