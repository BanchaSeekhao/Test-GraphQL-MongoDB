'use strict';
const graphql = require('graphql');
const PublisherModel = require('../graphql/schema/publisher');
const PublisherType = require('./itemtype/publisher');
const PublisherArgs = require('./itemargs/publisher');

var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLNonNull = graphql.GraphQLNonNull;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;

var queryPublisherType = new GraphQLObjectType({
    name: 'query',
    description: 'Query Publisher',
    fields: () => {
        return {
            //Get All Publishers
            publishers: {
                type: new GraphQLList(PublisherType),
                description: 'List of all Publishers',
                args: PublisherArgs.Query,
                resolve: async (parent, params) => {
                    return (await PublisherModel.find(params, (err) => {  
                        if (err) console.error(err);
                    }));
                }
            },
            //Get Single Publisher
            publisher: {
                type: PublisherType,
                description: 'List of single Publisher',
                args: PublisherArgs.Query,
                resolve: async (parent, params) => {
                    return (await PublisherModel.find(params, (err) => {
                        if (err) console.error(err);
                    }))[0];
                }
            },
            //Filter Publisher
            filters: {
                type: new GraphQLList(PublisherType),
                description: 'Filter of Publishers',
                args: PublisherArgs.Filter,
                resolve: async (parent, params) => {
                    if (params.sort_field) {
                        var sort_field = params.sort_field;
                        var sort_order = params.sort_order ? params.sort_order : 1;
                    }
                    //return (await BookModel.find(params.filter ? params.filter : {}, function (err) {
                    return (await PublisherModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));
                    //}).where(params.where ? params.where : {}).skip(params.skip ? params.skip : 0).sort(params.sort ? params.sort : '').limit(params.limit ? params.limit : 0));
                }
            },
            //Get Single ID
            id: {
                type: PublisherType,
                description: 'List of Publisher by ID',
                args: {
                    id: {
                        name: '_id',
                        type: GraphQLString
                    }
                },
                resolve: async (parent, params) => {
                    return await PublisherModel.findById(params.id, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});

var mutationPublisherType = new GraphQLObjectType({
    name: 'mutation',
    description: 'Mutation Publisher',
    fields: () => {
        return {
            addpublisher: {
                type: PublisherType,
                description: 'Add new Publisher',
                args: PublisherArgs.Insert,
                resolve: async (parent, params) => {
                    var publisherModel = new PublisherModel(params);
                    return await publisherModel.save().catch((err) => {
                        if (err) console.error(err);
                    });
                }
            },
            updatepublisher: {
                type: PublisherType,
                description: 'Update Publisher',
                args: PublisherArgs.Update,
                resolve: async (parent, params) => {
                    return await PublisherModel.findByIdAndUpdate(params.id,
                        {
                            publisherid: params.publisherid,
                            name: params.name,
                            address: params.address,
                            website: params.website,
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
            removepublisher: {
                type: PublisherType,
                description: 'Remove Publisher',
                args: PublisherArgs.Remove,
                resolve: async (parent, params) => {
                    return await PublisherModel.remove(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deletepublishers: {
                type: PublisherType,
                description: 'Delete Publishers',
                args: PublisherArgs.Delete,
                resolve: async (parent, params) => {
                    return await PublisherModel.deleteMany(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deletepublisher: {
                type: PublisherType,
                description: 'Delete Publisher',
                args: PublisherArgs.Delete,
                resolve: async (parent, params) => {
                    return await PublisherModel.deleteOne(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});
module.exports = new GraphQLSchema({ query: queryPublisherType, mutation: mutationPublisherType });