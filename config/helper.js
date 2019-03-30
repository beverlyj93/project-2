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
    selectOne: (column, table, modifier, value, cb) => {
        connection.query(`SELECT ${column} FROM ${table} WHERE ${modifier} = '${value}';`, result => {
            cb(result);
        });
    },
    insertOne: (table, columns, values, cb) => {
        connection.query(`INSERT INTO ${table} (${columns}) VALUES (${values});`, result => {
            cb(result);
        });
    },
    insertRepeat: (table, columns, values, iteration, cb) => {
        let results = [];
        for(let i = 0; i < iteration; i++) {
            connection.query(`INSERT INTO ${table} (${columns}) VALUES (${values});`, result => {
                results.push(result);
            });
        }
        cb(results);
    },
    deleteOne: (table, id, cb) => {
        connection.query(`DELETE FROM ${table} WHERE \`id\` = ${id};`, result => {
            cb(result);
        });
    },
    deleteAll: (table, cb) => {
        connection.query(`DELETE * FROM ${table};`, result => {
            cb(result);
        });
    }
}

module.exports = helper;