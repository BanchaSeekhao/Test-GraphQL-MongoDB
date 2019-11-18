'use strict';
const graphql = require('graphql');
const BarcodeModel = require('../graphql/schema/barcode');
const BarcodeType = require('./itemtype/barcode');
const BarcodeArgs = require('./itemargs/barcode');

var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLNonNull = graphql.GraphQLNonNull;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;

var queryBarcodeType = new GraphQLObjectType({
    name: 'query',
    description: 'Query Barcode',
    fields: () => {
        return {
            //Get All Barcodes
            barcodes: {
                type: new GraphQLList(BarcodeType),
                description: 'List of all Barcodes',
                args: BarcodeArgs.Query,
                resolve: async (parent, params) => {
                    return (await BarcodeModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));
                }
            },
            //Get Single Barcode
            barcode: {
                type: BarcodeType,
                description: 'List of single Barcode',
                args: BarcodeArgs.Query,
                resolve: async (parent, params) => {
                    return (await BarcodeModel.find(params, (err) => {
                        if (err) console.error(err);
                    }))[0];
                }
            },
            //Filter Barcode
            filters: {
                type: new GraphQLList(BarcodeType),
                description: 'Filter of Barcodes',
                args: BarcodeArgs.Filter,
                resolve: async (parent, params) => {
                    if (params.sort_field) {
                        var sort_field = params.sort_field;
                        var sort_order = params.sort_order ? params.sort_order : 1;
                    }
                    //return (await BarcodeModel.find(params.filter ? params.filter : {}, function (err) {
                    return (await BarcodeModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));
                    //}).where(params.where ? params.where : {}).skip(params.skip ? params.skip : 0).sort(params.sort ? params.sort : '').limit(params.limit ? params.limit : 0));
                }
            },
            //Get Single ID
            id: {
                type: BarcodeType,
                description: 'List of Barcode by ID',
                args: {
                    id: {
                        name: '_id',
                        type: GraphQLString
                    }
                },
                resolve: async (parent, params) => {
                    return await BarcodeModel.findById(params.id, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});

var mutationBarcodeType = new GraphQLObjectType({
    name: 'mutation',
    description: 'Mutation Barcode',
    fields: () => {
        return {
            addbarcode: {
                type: BarcodeType,
                description: 'Add new Barcode',
                args: BarcodeArgs.Insert,
                resolve: async (parent, params) => {
                    var barcodeModel = new BarcodeModel(params);
                    return await barcodeModel.save().catch((err) => {
                        if (err) console.error(err);
                    });
                }
            },
            updatebarcode: {
                type: BarcodeType,
                description: 'Update Barcode',
                args: BarcodeArgs.Update,
                resolve: async (parent, params) => {
                    return await BarcodeModel.findByIdAndUpdate(params.id,
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
            removebarcode: {
                type: BarcodeType,
                description: 'Remove Barcode',
                args: BarcodeArgs.Remove,
                resolve: async (parent, params) => {
                    return await BarcodeModel.remove(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deletebarcodes: {
                type: BarcodeType,
                description: 'Delete Books',
                args: BarcodeArgs.Delete,
                resolve: async (parent, params) => {
                    return await BarcodeModel.deleteMany(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deletebarcode: {
                type: BarcodeType,
                description: 'Delete Barcode',
                args: BarcodeArgs.Delete,
                resolve: async (parent, params) => {
                    return await BarcodeModel.deleteOne(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});
module.exports = new GraphQLSchema({ query: queryBarcodeType, mutation: mutationBarcodeType });