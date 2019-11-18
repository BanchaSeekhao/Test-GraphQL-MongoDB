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

var mutateBookType = new GraphQLObjectType({
    name: 'mutate',
    description: "Mutation Book",
    fields: () => {
        return {
            addbook: {
                type: BookType,
                description: "Add new Book",
                args: BookArgs.Insert,
                resolve: async (parent, params) => {
                    var bookModel = new BookModel(params);
                    return await bookModel.save().catch((err) => {
                        if (err) console.error(err);
                    });
                }
            },
            updatebook: {
                type: BookType,
                description: "Update Book",
                args: BookArgs.Update,
                resolve: async (parent, params) => {
                    return await BookModel.findByIdAndUpdate(params.id,
                        {
                            bookid: params.bookid,
                            isbn: params.isbn,
                            title: params.title,
                            authorid: params.authorid,
                            description: params.description,
                            published_year: params.published_year,
                            publisherid: params.publisherid,
                            dateupdated: new Date()
                        }, (err) => {
                            if (err) console.error(err);
                        });
                }
            },
            removebook: {
                type: BookType,
                description: "Remove Book",
                args: BookArgs.Remove,
                resolve: async (parent, params) => {
                    return await BookModel.remove(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deletebooks: {
                type: BookType,
                description: "Delete Books",
                args: BookArgs.Delete,
                resolve: async (parent, params) => {
                    return await BookModel.deleteMany(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deletebook: {
                type: BookType,
                description: "Delete Book",
                args: BookArgs.Delete,
                resolve: async (parent, params) => {
                    return await BookModel.deleteOne(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});
module.exports = new GraphQLSchema({ mutate: mutateBookType });