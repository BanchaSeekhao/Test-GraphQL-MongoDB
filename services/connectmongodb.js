'use strict';
const mongoose = require('mongoose');
const configmongodb = require('../configs/mongodb');

class Database {
    constructor() {
      this.mongodbconnect()
    }

    mongodbconnect() {
        mongoose.Promise = global.Promise;
        const optMongoose = {
            promiseLibrary: global.Promise,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            autoIndex: false, // Don't build indexes
            reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            reconnectInterval: 500, // Reconnect every 500ms
            poolSize: 100, // Maintain up to 100 socket connections            
            bufferMaxEntries: 0, // If not connected, return errors immediately rather than waiting for reconnect
            connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        };
        //mongoose.Promise = promisify;  tao@12032515 , tao@2515
        //mongoose.connect('mongodb+srv://admin:adasoft@cluster0-2pens.gcp.mongodb.net/test?retryWrites=true&w=majority', optMongoose)
        //mongoose.connect('mongodb://localhost:27017/mymongodb', optMongoose)
        var mongodb_ConStr = configmongodb.MongoDB_ConStr;
        if (configmongodb.Use_MongoDB_Atlas) { mongodb_ConStr = configmongodb.MongoDB_Atlas_ConStr; }
        console.log('MongoDB Connecting ' + mongodb_ConStr);
        mongoose.connect(mongodb_ConStr, optMongoose)
            .then((conn) => {
                console.log('MongoDB Connected Success');
                return conn;
            })
            .catch((err) => {
                console.error('MongoDB Connection Error', err);
            });
        mongoose.connection.once('open', () => {
            console.log('MongoDB Connecting...');
        });
        // mongoose.connection.on('connected', () => {
        //     console.log('MongoDB Connected.');
        // });
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB DisConnected.');
        });
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB Error', err);
        });
    }
}
module.exports = new Database()