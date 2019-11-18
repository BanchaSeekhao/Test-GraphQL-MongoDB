'use strict';
const mongoose = require('mongoose');
const moment = require('moment');

var barcodeSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    FTPdtCode: { type: String, required: true, unique: true },
    FTPdtBarCode: { type: String, required: true },
    FCPdtRetPri1: { type: Number, Default: 0 },
    FCPdtRetPri2: { type: Number, Default: 0 },
    FCPdtRetPri3: { type: Number, Default: 0 },
    FCPdtWhsPri1: { type: Number, Default: 0 },
    FCPdtWhsPri2: { type: Number, Default: 0 },
    FCPdtWhsPri3: { type: Number, Default: 0 },
    FCPdtWhsPri4: { type: Number, Default: 0 },
    FCPdtWhsPri5: { type: Number, Default: 0 },
    FCPdtBuyCost: { type: Number, Default: 0 },
    FDPdtPriAffect: { type: Date, default: Date.now },
    FDDateUpd: { type: Date, default: Date.now },
    FTTimeUpd: { type: String, default: moment().format('HH:mm:ss') },
    FTWhoUpd: { type: String, default: 'system' },
    FDDateIns: { type: Date, default: Date.now },
    FTTimeIns: { type: String, default: moment().format('HH:mm:ss') },
    FTWhoIns: { type: String, default: 'system' }
});
module.exports = mongoose.model('barcode', barcodeSchema, 'TCNMPdtBar');