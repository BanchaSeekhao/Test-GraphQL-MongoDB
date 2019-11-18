'use strict';
const mongoose = require('mongoose');

var publisherSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    publisherid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String, default: '' },
    website: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    faceid: { type: String, default: '' },
    lineid: { type: String, default: '' },
    datecreated: { type: Date, default: Date.now },
    dateupdated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('publisher', publisherSchema, 'publishers');