'use strict';
const graphqlProduct = require('../graphql/products');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

module.exports = (router) => {
    router.use('/product', bodyParser.json(), graphqlHttp({
        schema: graphqlProduct,
        rootValue: global,
        pretty: true,
        graphiql: true,
    }));
    return router;
};
