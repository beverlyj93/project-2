var helper = require('../config/helper');
var path = require('path');

module.exports = function(app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    })
    
    app.get('/results', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/results.html'));
    })
    
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/survey.html'));
    })
}