'use strict';
const graphql = require('graphql');
const ProductModel = require('../graphql/schema/product');
const ProductType = require('./itemtype/product');
const ProductArgs = require('./itemargs/product');

var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLList = graphql.GraphQLList;
var GraphQLNonNull = graphql.GraphQLNonNull;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;

var queryProductType = new GraphQLObjectType({
    name: 'query',
    description: 'Query Product',
    fields: () => {
        return {
            //Get All Products
            products: {
                type: new GraphQLList(ProductType),
                description: 'List of all Products',
                args: ProductArgs.Query,
                resolve: async (parent, params) => {
                    return (await ProductModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));
                }
            },
            //Get Single Product
            product: {
                type: ProductType,
                description: 'List of single Product',
                args: ProductArgs.Query,
                resolve: async (parent, params) => {
                    return (await ProductModel.find(params, (err) => {
                        if (err) console.error(err);
                    }))[0];
                }
            },
            //Filter Product
            filters: {
                type: new GraphQLList(ProductType),
                description: 'Filter of Products',
                args: ProductArgs.Filter,
                resolve: async (parent, params) => {
                    if (params.sort_field) {
                        var sort_field = params.sort_field;
                        var sort_order = params.sort_order ? params.sort_order : 1;
                    }
                    //return (await ProductModel.find(params.filter ? params.filter : {}, function (err) {
                    return (await ProductModel.find(params, (err) => {
                        if (err) console.error(err);
                    }));
                    //}).where(params.where ? params.where : {}).skip(params.skip ? params.skip : 0).sort(params.sort ? params.sort : '').limit(params.limit ? params.limit : 0));
                }
            },
            //Get Single ID
            id: {
                type: ProductType,
                description: 'List of Product by ID',
                args: {
                    id: {
                        name: '_id',
                        type: GraphQLString
                    }
                },
                resolve: async (parent, params) => {
                    return await ProductModel.findById(params.id, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});

var mutationProductType = new GraphQLObjectType({
    name: 'mutation',
    description: 'Mutation Product',
    fields: () => {
        return {
            addproduct: {
                type: ProductType,
                description: 'Add new Product',
                args: ProductArgs.Insert,
                resolve: async (parent, params) => {
                    var productModel = new ProductModel(params);
                    return await productModel.save().catch((err) => {
                        if (err) console.error(err);
                    });
                }
            },
            updateproduct: {
                type: ProductType,
                description: 'Update Product',
                args: ProductArgs.Update,
                resolve: async (parent, params) => {
                    return await ProductModel.findByIdAndUpdate(params.id,
                        {
                            //bookid: params.bookid,
                            //isbn: params.isbn,
                            //title: params.title,
                            //authorid: params.authorid,
                            //description: params.description,
                            //published_year: params.published_year,
                            //publisherid: params.publisherid,
                            //dateupdated: new Date()
                        }, (err) => {
                            if (err) console.error(err);
                        });
                }
            },
            removeproduct: {
                type: ProductType,
                description: 'Remove Product',
                args: ProductArgs.Remove,
                resolve: async (parent, params) => {
                    return await ProductModel.remove(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deleteproducts: {
                type: ProductType,
                description: 'Delete Products',
                args: ProductArgs.Delete,
                resolve: async (parent, params) => {
                    return await ProductModel.deleteMany(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            },
            deleteproduct: {
                type: ProductType,
                description: 'Delete Product',
                args: ProductArgs.Delete,
                resolve: async (parent, params) => {
                    return await ProductModel.deleteOne(params, (err) => {
                        if (err) console.error(err);
                    });
                }
            }
        }
    }
});
module.exports = new GraphQLSchema({ query: queryProductType, mutation: mutationProductType });