var express = require('express');
var app = express();
var router = express.Router();
var index = require('./routes/index');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var Book = require('./models/book');

var thing = require('./routes/book');

var mongo = 'mongodb://localhost:27017/library';

mongoose.connect(mongo);

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use('/', index);
app.use('/book', thing);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});



module.exports = app;