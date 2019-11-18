'use strict';
const graphqlBarcode = require('../graphql/barcodes');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

module.exports = (router) => {
    router.use('/barcode', bodyParser.json(), graphqlHttp({
        schema: graphqlBarcode,
        rootValue: global,
        pretty: true,
        graphiql: true,
    }));
    return router;
};
