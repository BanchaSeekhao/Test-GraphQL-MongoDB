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
    name: 'authorType',
    description: 'Items of The Author',
    fields: () => {
        return {
            _id: { type: new GraphQLNonNull(GraphQLString) },
            authorid: { type: new GraphQLNonNull(GraphQLString) },
            firstname: { type: new GraphQLNonNull(GraphQLString) },
            lastname: { type: GraphQLString },
            birthdate: { type: GraphQLDate },
            gender: { type: GraphQLString },
            email: { type: GraphQLString },
            phone: { type: GraphQLString },
            faceid: { type: GraphQLString },
            lineid: { type: GraphQLString },
            datecreated: { type: GraphQLDate },
            dateupdated: { type: GraphQLDate }
        }
    }
});