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

//const ProductModel = require('../schema/product.js');
//const ProductType = require('../itemtype/product.js');

//const PublisherModel = require('../schema/publisher.js');
//const PublisherType = require('../itemtype/publisher.js');

module.exports = new GraphQLObjectType({
    name: 'productType',
    description: 'Items of The Product',
    fields: () => {
        return {
            _id: { type: new GraphQLNonNull(GraphQLString) },
            FTPdtCode: { type: new GraphQLNonNull(GraphQLString) },
            FTPdtName: { type: new GraphQLNonNull(GraphQLString) },
            FTPdtNameOth: { type: GraphQLString },
            FTPdtNameShort: { type: GraphQLString },
            FTPdtNameShortEng: { type: GraphQLString },
            FTPdtStkCode: { type: new GraphQLNonNull(GraphQLString) },
            FCPdtStkFac: { type: GraphQLInt },
            FTPdtStkControl: { type: GraphQLString },
            FTPunCode: { type: GraphQLString },
            FTSplCode: { type: GraphQLString }
            //author: {
            //    type: new GraphQLList(AuthorType),
            //    resolve: async function (parent) {
            //        return await AuthorModel.find({ authorid: parent.authorid });
            //    }
            //},
            //publisher: {
            //    type: new GraphQLList(PublisherType),
            //    resolve: async function (parent) {
            //        return await PublisherModel.find({ publisherid: parent.publisherid });
            //    }
            //}
        }
    }
});