'use strict';
const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    bookid: { type: String, required: true, unique: true },
    isbn: { type: String, required: true },
    title: { type: String, default: '' },
    authorid: { type: String, default: '' },
    description: { type: String, default: '' },
    published_year: { type: Number, min: 1945, max: 2019 },
    publisherid: { type: String, default: '' },
    datecreated: { type: Date, default: Date.now },
    dateupdated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('book', bookSchema, 'books');