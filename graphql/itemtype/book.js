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

const AuthorModel = require('../schema/author');
const AuthorType = require('../itemtype/author');

const PublisherModel = require('../schema/publisher');
const PublisherType = require('../itemtype/publisher');

module.exports = new GraphQLObjectType({
    name: 'bookType',
    description: "Items of The Book",
    fields: () => {
        return {
            _id: { type: new GraphQLNonNull(GraphQLString) },
            bookid: { type: new GraphQLNonNull(GraphQLString) },
            isbn: { type: new GraphQLNonNull(GraphQLString) },
            title: { type: GraphQLString },
            authorid: { type: GraphQLString },
            author: {
                type: new GraphQLList(AuthorType),
                resolve: async (parent) => {
                    return await AuthorModel.find({ authorid: parent.authorid });                   
                }
            },
            description: { type: GraphQLString },
            published_year: { type: GraphQLInt },
            publisherid: { type: GraphQLString },
            publisher: {
                type: new GraphQLList(PublisherType),
                resolve: async (parent) => {
                    return await PublisherModel.find({ publisherid: parent.publisherid });
                }
            },
            datecreated: { type: GraphQLDate },
            dateupdated: { type: GraphQLDate }
        }
    }
});