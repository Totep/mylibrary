/**
 * Created by Totep on 1/4/16.
 */
var mongo = 'mongodb://localhost:27017/library';
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var bookSchema = new Schema({
    book_id: Number,
    title: String,
    authorLast: String,
    authorFirst: String,
    genre: Array,
    notes: String,
    isbn: Number
});

//var insertBook = function(req){
//    mongoClient.connect(mongo, function(err, db){
//        var collection = db.collection('books');
//        collection.insert(req.body);
//    });
//};

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;