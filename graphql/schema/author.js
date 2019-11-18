'use strict';
const mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    authorid: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String },
    birthdate: { type: Date },
    gender: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    faceid: { type: String, default: '' },
    lineid: { type: String, default: '' },
    datecreated: { type: Date, default: Date.now },
    dateupdated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('author', authorSchema, 'authors');