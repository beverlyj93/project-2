var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/api-routes")(app);
require('./routes/html-routes')(app);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})