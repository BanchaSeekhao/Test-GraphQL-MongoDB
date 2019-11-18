'use strict';
const graphql = require('graphql');
const BookModel = require('../schema/book.js');
const BookType = require('../itemtype/book.js');
const BookArgs = require('../itemargs/book.js');

const AuthorModel = require('../schema/author.js');
const AuthorType = require('../itemtype/author.js');
const AuthorArgs = require('../itemargs/author.js');

var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLNonNull = graphql.GraphQLNonNull;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;

var queryBookType = new GraphQLObjectType({
    name: 'query',
    description: "Query Book",
    fields: () => {
        return {
            //Get All Books
            books: {
                type: new GraphQLList(BookType),
                description: "List of all Books",
                args: BookArgs.Query,
                resolve: async (parent, params) => {
                    return (await BookModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));
                }
            },
            //Get Single Book
            book: {
                type: BookType,
                description: "List of single Book",
                args: BookArgs.Query,
                resolve: async (parent, params) => {
                    return (await BookModel.find(params, (err) => {
                        if (err) console.error(err);
                    }))[0];
                }
            },
            //Filter Book
            filters: {
                type: new GraphQLList(BookType),
                description: "Filter of Books",
                args: BookArgs.Filter,
                resolve: async (parent, params) => {
                    if (params.sort_field) {
                        var sort_field = params.sort_field;
                        var sort_order = params.sort_order ? params.sort_order : 1;
                    }
                    //return (await BookModel.find(params.filter ? params.filter : {}, function (err) {
                    return (await BookModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));    
                    //}).where(params.where ? params.where : {}).skip(params.skip ? params.skip : 0).sort(params.sort ? params.sort : '').limit(params.limit ? params.limit : 0));
                }
            },
            //Get Single ID
            id: {
                type: BookType,
                description: "List of Book by ID",
                args: {
                    id: {
                        name: '_id',
                        type: GraphQLString
                    }
                },
                resolve: async (parent, params) => {
                    return await BookModel.findById(params.id, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});
module.exports = new GraphQLSchema({ query: queryBookType });