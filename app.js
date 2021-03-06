/**
 * Module dependencies.
**/

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
    res.sendFile('./public/index.html');
});

app.listen(3000);

console.log('Listening on port: 3000');