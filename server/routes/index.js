var express = require('express');
var router = express.Router();
var path = require('path');
//var mongoose = require('mongoose');
var Book = require('../models/book.js');



router.get('/', function(req, res, next) {
    console.log('Made it to route!');
    res.sendFile(path.join(__dirname,'../public/views/index.html'));
    //next();
});


router.post('/', function(request, response, next){
    console.log(request.body);
    var bookie = new Book(
        {   title: request.body.title,
            authorLast: request.body.authorLast,
            authorFirst: request.body.authorFirst,
            genre: request.body.genre,
            notes: request.body.notes,
            isbn: request.body.isbn});
    bookie.save(function(err){
        if(err) console.log('No book', err);
        response.send(bookie.toJSON());
        next();
    });
});

router.get('/books', function(request, response, next){
    return Book.find({}).exec(function(err, books){
        if(err) throw new Error(err);
        response.send(JSON.stringify(books));
        next();
    });
});

module.exports = router;