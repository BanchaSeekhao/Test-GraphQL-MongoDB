'use strict';
console.log('--------------- Starting Server ---------------');

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieparser = require('cookie-parser');
const session = require("express-session");
const path = require('path');

// // เพิ่มตัว RedisStore ขึ้นมาจะทำหน้าที่เก็บ session แทน express-session ที่ใช้ในเวลาปกตินั่นเอง
// const RedisStore = require("connect-redis")(session);
// const redis = require("redis"); //เป็นตัวสำหรับเชื่อมต่อไปยัง host เครื่องนั้นๆ

// // ตัวแปรสำหรับ config ค่าพื้นฐานจะทำ dotenv หรือจะใส่ตรงๆเพื่อทดสอบก็ได้ ~
// const port = 6379; //port ของ redis ที่เรา config มาโดยปกติคือ 6379
// const host = "Clarrisa@redis.com"; // ชื่อ host ที่จะเป็น ip หรือ dns เครื่องก็ได้แต่จะอยู่ในรูปแบบ String
// const password = "I want to sleep TwT"; // [Optional] รหัสผ่านของ redis ที่เราตั้งไว้ (ต้อง config ในเครื่อง redis)
// const client = redis.createClient(port, host, { password, ttl: 1 });

const auth = require('./middlewares/auth');
const index = require('./routes/index');
const login = require('./routes/login');
const books = require('./routes/books');
const authors = require('./routes/authors');
const publishers = require('./routes/publishers');
//const replicate = require('./routes/replicate');
const products = require('./routes/products');
const barcodes = require('./routes/barcodes');
const suppliers = require('./routes/suppliers');
const connectmongodb = require('./services/connectmongodb');
const appconfig = require('./configs/app');

const router = express.Router();
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors({ origin: true })); // Automatically allow cross-origin requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser({ limit: '50mb' }));
//app.use(cookieparser())
app.use(cookieparser(appconfig.COOKIE_SECRET));
// app.use(
//     session({
//         resave: true,
//         saveUninitialized: true,
//         secret: appconfig.COOKIE_SECRET,
//         cookie: {
//             maxAge: COOKIE_EXPRIES,
//         },

//         // // เป็นการ config ให้ session ใช้ redis ซึ่งใช้แบบ client connect ก็ได้หรือจะ inject host, port เอง
//         // store: new RedisStore({
//         //     client
//         // }),
//     })
//   );
app.use(compression());
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public/images')));
//app.use(express.static(path.join(__dirname, 'public/medias')));
//app.use(express.static(path.join(__dirname, 'middlewares/face/weights')));
//app.use(express.static(path.join(__dirname, 'middlewares/face/dist')));

//app.use('/', firebaseauth);
app.use('/', index(router));
app.use('/', login(router));
app.use('/', books(router));
app.use('/', authors(router));
app.use('/', publishers(router));
app.use('/', products(router));
app.use('/', barcodes(router));
app.use('/', suppliers(router));
//app.use('/', replicate(router));

/*
 * Add middleware. Because we defined the first parameter ( '/api' ), it will run
 * only for urls that starts with '/api/*'
 */
app.use('/api', auth);
app.use('/api', require('./routes/helloworld.js')(router));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (app.get('env') === 'development') {
    // development error handler
    // will print stacktrace    
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else {
    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
};
app.set('port', process.env.PORT || appconfig.APP_PORT);
var server = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + server.address().port);
});
