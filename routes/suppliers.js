'use strict';
const graphqlSupplier = require('../graphql/suppliers');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

module.exports = (router) => {
    router.use('/supplier', bodyParser.json(), graphqlHttp({
        schema: graphqlSupplier,
        rootValue: global,
        pretty: true,
        graphiql: true,
    }));
    return router;
};