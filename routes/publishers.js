'use strict';
const graphqlPublisher = require('../graphql/publishers');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

module.exports = (router) => {
    router.use('/publisher', bodyParser.json(), graphqlHttp({
        schema: graphqlPublisher,
        rootValue: global,
        pretty: true,
        graphiql: true,
    }));
    return router;
};
