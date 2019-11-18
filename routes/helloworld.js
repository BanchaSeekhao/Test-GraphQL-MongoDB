'use strict';

module.exports = (router) => {
    router.get('/helloworld', (req, res) => {
        res.send('Hello World');
    });
    return router;
};
