'use strict';
const cryptr = require('cryptr');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../configs/app');

module.exports = (router) => {
    router.post('/login', async (req, res) => {
        if ((req.hasOwnProperty('headers')) && (req.headers.hasOwnProperty('secretid')) && (req.headers.hasOwnProperty('secret'))) {
            var { secretid, secret } = req.headers;
            var { username, password } = req.body;
            if (username !== '' && password !== '') {
                var tokenid = username + ';' + password;
                /** One way, can't decrypt but can compare */
                var salt = bcrypt.genSaltSync(10);
                /** Encrypt */
                var hashtokenid = new cryptr(config.JWT_SECRET).encrypt(tokenid);
                //const hashtokenid = bcrypt.hashSync(tokenid, secret);
                res.json(await {
                    id: '1',
                    rescode: 0,
                    message: 'success',
                    expiresIn: config.JWT_EXPIRES,
                    tokenid: hashtokenid,
                    token: jwt.sign({
                        id: '1', name: username
                    }, hashtokenid, { expiresIn: config.JWT_EXPIRES })
                });
            } else {
                /*
                 * If the username or password was wrong, return 401 ( Unauthorized )
                 * status code and JSON error message
                 */
                res.status(401).json({
                    error: {
                        rescode: 401,
                        message: 'Wrong username or password!'
                    }
                });
            }
        }
        else {
            /*
             * If there is no Secret header, return 401 status code with JSON
             * error message
             */
            return res.status(401).json({
                error: {
                    msg: 'No Secret!'
                }
            });
        }
    });
    return router;
};
