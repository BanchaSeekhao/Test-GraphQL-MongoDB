'use strict';
const graphql = require('graphql');
const AuthorModel = require('../graphql/schema/author');
const AuthorType = require('./itemtype/author');
const AuthorArgs = require('./itemargs/author');

var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLNonNull = graphql.GraphQLNonNull;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;

var queryAuthorType = new GraphQLObjectType({
    name: 'query',
    description: 'Query Author',
    fields: () => {
        return {
            //Get All Authors
            authors: {
                type: new GraphQLList(AuthorType),
                description: 'List of all Authors',
                args: AuthorArgs.Query,
                resolve: async (parent, params) => {
                    return (await AuthorModel.find(params, (err) => {  
                        if (err) console.error(err);
                    }));
                }
            },
            //Get Single Author
            author: {
                type: AuthorType,
                description: 'List of single Author',
                args: AuthorArgs.Query,
                resolve: async (parent, params) => {
                    return (await AuthorModel.find(params, (err) => {
                        if (err) console.error(err);
                    }))[0];
                }
            },
            //Filter Author
            filters: {
                type: new GraphQLList(AuthorType),
                description: 'Filter of Authors',
                args: AuthorArgs.Filter,
                resolve: async (parent, params) => {
                    if (params.sort_field) {
                        var sort_field = params.sort_field;
                        var sort_order = params.sort_order ? params.sort_order : 1;
                    }
                    //return (await BookModel.find(params.filter ? params.filter : {}, function (err) {
                    return (await AuthorModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));
                    //}).where(params.where ? params.where : {}).skip(params.skip ? params.skip : 0).sort(params.sort ? params.sort : '').limit(params.limit ? params.limit : 0));
                }
            },
            //Get Single ID
            id: {
                type: AuthorType,
                description: 'List of Author by ID',
                args: {
                    id: {
                        name: '_id',
                        type: GraphQLString
                    }
                },
                resolve: async (parent, params) => {
                    return await AuthorModel.findById(params.id, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});

var mutationAuthorType = new GraphQLObjectType({
    name: 'mutation',
    description: 'Mutation Author',
    fields: () => {
        return {
            addauthor: {
                type: AuthorType,
                description: 'Add new Author',
                args: AuthorArgs.Insert,
                resolve: async (parent, params) => {
                    var authorModel = new AuthorModel(params);
                    return await authorModel.save().catch((err) => {
                        if (err) console.error(err);
                    });
                }
            },
            updateauthor: {
                type: AuthorType,
                description: 'Update Author',
                args: AuthorArgs.Update,
                resolve: async (parent, params) => {
                    return await AuthorModel.findByIdAndUpdate(params.id,
                        {
                            authorid: params.authorid,
                            firstname: params.firstname,
                            lastname: params.lastname,
                            birthdate: params.birthdate,
                            gender: params.gender,
                            email: params.email,
                            phone: params.phone,
                            faceid: params.faceid,
                            lineid: params.lineid,
                            dateupdated: new Date()
                        }, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            removeauthor: {
                type: AuthorType,
                description: 'Remove Author',
                args: AuthorArgs.Remove,
                resolve: async (parent, params) => {
                    return await AuthorModel.remove(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deleteauthors: {
                type: AuthorType,
                description: 'Delete Authors',
                args: AuthorArgs.Delete,
                resolve: async (parent, params) => {
                    return await AuthorModel.deleteMany(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deleteauthor: {
                type: AuthorType,
                description: 'Delete Author',
                args: AuthorArgs.Delete,
                resolve: async (parent, params) => {
                    return await AuthorModel.deleteOne(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});
module.exports = new GraphQLSchema({ query: queryAuthorType, mutation: mutationAuthorType });