'use strict';

module.exports = (router) => {
    router.get('/', (req, res) => {
        res.send('Welcome to Express');
    });
    return router;
};