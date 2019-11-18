'use strict';
const graphqlAuthor = require('../graphql/authors');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

module.exports = (router) => {
    router.use('/author', bodyParser.json(), graphqlHttp({
        schema: graphqlAuthor,
        rootValue: global,
        pretty: true,
        graphiql: true,
    }));
    return router;
};
