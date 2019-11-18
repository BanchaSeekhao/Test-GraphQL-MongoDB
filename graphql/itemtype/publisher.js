'use strict';
const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLNonNull = graphql.GraphQLNonNull;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;
var GraphQLBoolean = graphql.GraphQLBoolean;

module.exports = new GraphQLObjectType({
    name: 'publisherType',
    description: 'Items of The Publisher',
    fields: () => {
        return {
            _id: { type: new GraphQLNonNull(GraphQLString) },
            publisherid: { type: new GraphQLNonNull(GraphQLString) },
            name: { type: new GraphQLNonNull(GraphQLString) },
            address: { type: GraphQLString },
            website: { type: GraphQLString },
            email: { type: GraphQLString },
            phone: { type: GraphQLString },
            faceid: { type: GraphQLString },
            lineid: { type: GraphQLString },
            datecreated: { type: GraphQLDate },
            dateupdated: { type: GraphQLDate }
        }
    }
});