var helper = require('../config/helper');


module.exports = function (app) {
    // Basic route that sends the user first to the AJAX Page

    app.get("/api/users", function (req, res) {
        helper.selectAll( 'users',function (data) {
        if (data) {
            console.log(data)
            return res.json(data)
        }
        });
    })
    app.get("/api/one", function (req, res) {
        helper.selectOne('users', 'email','boy', function(data) {
            return res.json(data);
        } )
    })
    app.get('/api/test', (req, res) => {
        res.json('all dis data');
    })
    app.post('/api/test', (req, res) => {
        console.log(req.body);
    })
};