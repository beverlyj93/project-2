var helper = require('../config/helper');
var connection = require('../config/connection')
var path = require("path");


module.exports = function (app) {
    // Basic route that sends the user first to the AJAX Page

    app.get("/api/users", function (req, res) {
        console.log(req.body)
        helper.selectAll();
    })
};