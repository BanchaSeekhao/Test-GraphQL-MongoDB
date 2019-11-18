'use strict';
const graphql = require('graphql');
const SupplierModel = require('../graphql/schema/supplier');
const SupplierType = require('./itemtype/supplier');
const SupplierArgs = require('./itemargs/supplier');

var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLNonNull = graphql.GraphQLNonNull;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;

var querySupplierType = new GraphQLObjectType({
    name: 'query',
    description: 'Query Supplier',
    fields: () => {
        return {
            //Get All Suppliers
            suppliers: {
                type: new GraphQLList(SupplierType),
                description: 'List of all Suppliers',
                args: SupplierArgs.Query,
                resolve: async (parent, params) => {
                    return (await SupplierModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));
                }
            },
            //Get Single Supplier
            supplier: {
                type: SupplierType,
                description: 'List of single Supplier',
                args: SupplierArgs.Query,
                resolve: async (parent, params) => {
                    return (await SupplierModel.find(params, (err) => {
                        if (err)console.error(err);
                    }))[0];
                }
            },
            //Filter Supplier
            filters: {
                type: new GraphQLList(SupplierType),
                description: 'Filter of Suppliers',
                args: SupplierArgs.Filter,
                resolve: async (parent, params) => {
                    if (params.sort_field) {
                        var sort_field = params.sort_field;
                        var sort_order = params.sort_order ? params.sort_order : 1;
                    }
                    //return (await SupplierModel.find(params.filter ? params.filter : {}, function (err) {
                    return (await SupplierModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));    
                    //}).where(params.where ? params.where : {}).skip(params.skip ? params.skip : 0).sort(params.sort ? params.sort : '').limit(params.limit ? params.limit : 0));
                }
            },
            //Get Single ID
            id: {
                type: SupplierType,
                description: 'List of Supplier by ID',
                args: {
                    id: {
                        name: '_id',
                        type: GraphQLString
                    }
                },
                resolve: async (parent, params) => {
                    return await SupplierModel.findById(params.id, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});

var mutationSupplierType = new GraphQLObjectType({
    name: 'mutation',
    description: 'Mutation Supplier',
    fields: () => {
        return {
            addsupplier: {
                type: SupplierType,
                description: 'Add new Supplier',
                args: SupplierArgs.Insert,
                resolve: async (parent, params) => {
                    var supplierModel = new SupplierModel(params);
                    return await supplierModel.save().catch((err) => {
                        if (err) console.error(err);
                    });
                }
            },
            updatesupplier: {
                type: SupplierType,
                description: 'Update Supplier',
                args: SupplierArgs.Update,
                resolve: async (parent, params) => {
                    return await SupplierModel.findByIdAndUpdate(params.id,
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
            removesupplier: {
                type: SupplierType,
                description: 'Remove Supplier',
                args: SupplierArgs.Remove,
                resolve: async (parent, params) => {
                    return await SupplierModel.remove(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deletesuppliers: {
                type: SupplierType,
                description: 'Delete Suppliers',
                args: SupplierArgs.Delete,
                resolve: async (parent, params) => {
                    return await SupplierModel.deleteMany(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deletesupplier: {
                type: SupplierType,
                description: 'Delete Supplier',
                args: SupplierArgs.Delete,
                resolve: async (parent, params) => {
                    return await SupplierModel.deleteOne(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});
module.exports = new GraphQLSchema({ query: querySupplierType, mutation: mutationSupplierType });