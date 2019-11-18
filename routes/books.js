'use strict';
const graphqlBook = require('../graphql/books');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

module.exports = (router) => {
    router.use('/book', bodyParser.json(), graphqlHttp({
        schema: graphqlBook,
        rootValue: global,
        pretty: true,
        graphiql: true,
    }));
    return router;
};
