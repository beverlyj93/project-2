var express = require('express');
var connection = require('./config/connection');
var path = require('path');
var app = express();
var helper = require('./config/helper');
var port = process.env.port || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/results.html'));
})

app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/survey.html'));
})

require("./routes/api-routes")(app);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})