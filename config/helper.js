var connection = require('./connection');

var helper = {
    query: (data, cb) => {
        connection.query(data, result => {
            cb(result);
        });
    },
    selectAll: () => {
        connection.query('SELECT * FROM  users,', function (err,data) {
            if (!err) {
                console.log(data)
            } else {
                throw err
            }
        });
    },
    selectOne: (column, table, modifier, value) => {
        connection.query(`SELECT ${column} FROM ${table} WHERE ${modifier} = '${value}';`, result => {
            cb(result);
        });
    }
}

module.exports = helper;