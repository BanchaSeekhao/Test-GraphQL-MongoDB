'use strict';
const mongoose = require('mongoose');
const moment = require('moment');

var supplierSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    FTSplCode: { type: String, required: true, unique: true },
    FTSplName: { type: String, required: true },
    FTSplNameOth: { type: String, default: '' },
    FTSplAddr: { type: String, default: '' },
    FTSplStreet: { type: String, default: '' },
    FTSplDistrict: { type: String, default: '' },
    FTDstCode: { type: String, default: '' },
    FTPvnCode: { type: String, default: '' },
    FTSplPostCode: { type: String, default: '' },
    FTSplTel: { type: String, default: '' },
    FTSplFax: { type: String, default: '' },
    FTSplEmail: { type: String, default: '' },
    FTSplWeb: { type: String, default: '' },
    FTSplTaxNo: { type: String, default: '' },
    FTSplSex: { type: String, default: '' },
    FTSplDob: { type: String, default: '' },
    FDSplDob: { type: String, default: '' },
    FCSplAmtLeft: { type: String, default: '' },

    FDDateUpd: { type: Date, default: Date.now },
    FTTimeUpd: { type: String, default: moment().format('HH:mm:ss') },
    FTWhoUpd: { type: String, default: 'system' },
    FDDateIns: { type: Date, default: Date.now },
    FTTimeIns: { type: String, default: moment().format('HH:mm:ss') },
    FTWhoIns: { type: String, default: 'system' }
});
module.exports = mongoose.model('supplier', supplierSchema, 'TCNMSpl');