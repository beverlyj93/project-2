require('dotenv').config({path: __dirname + '/config.env'});
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
require("./routes/api-routes")(app);
require('./routes/html-routes')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})