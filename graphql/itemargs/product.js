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

module.exports = {
    Query: {
        id: {
            name: '_id',
            type: GraphQLID
        },
        FTPdtCode: {
            name: 'FTPdtCode',
            type: GraphQLString
        },
        FTPdtName: {
            name: 'FTPdtName',
            type: GraphQLString
        },
        FTPdtNameOth: {
            name: 'FTPdtNameOth',
            type: GraphQLString
        },
        FTPdtNameShort: {
            name: 'FTPdtNameShort',
            type: GraphQLString
        },
        FTPdtNameShortEng: {
            name: 'FTPdtNameShortEng',
            type: GraphQLString
        },
        FTPdtStkCode: {
            name: 'FTPdtStkCode',
            type: GraphQLString
        },
        FTPunCode: {
            name: 'FTPunCode',
            type: GraphQLString
        },
        FTSplCode: {
            name: 'FTSplCode',
            type: GraphQLString
        }
    },
    Filter: {
        skip: {
            type: GraphQLInt
        },
        limit: {
            type: GraphQLInt
        },
        sort_field: {
            type: GraphQLString
        },
        sort_order: {
            type: GraphQLString
        },
        where: {
            type: GraphQLString
        }//,
        //filter: Query
        //        {
        //    type: {
        //        id: {
        //            type: new GraphQLNonNull(GraphQLID)
        //        },
        //        isbn: {
        //            type: new GraphQLNonNull(GraphQLString)
        //        }
        //        title: {
        //            type: new GraphQLNonNull(GraphQLString)
        //        },
        //        author: {
        //            type: new GraphQLNonNull(GraphQLString)
        //        },
        //        description: {
        //            type: new GraphQLNonNull(GraphQLString)
        //        },
        //        published_year: {
        //            type: new GraphQLNonNull(GraphQLInt)
        //        },
        //        publisher: {
        //            type: new GraphQLNonNull(GraphQLString)
        //        },
        //        updated_date: {
        //            type: new GraphQLNonNull(GraphQLDate)
        //        }
        //    }
        //}
    },
    Insert: {
        FTPdtCode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtNameOth: {
            type: GraphQLString
        },
        FTPdtNameShort: {
            type: GraphQLString
        },
        FTPdtNameShortEng: {
            type: GraphQLString
        },
        FTPdtStkCode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPunCode: {
            type: GraphQLString
        },
        FTSplCode: {
            type: GraphQLString
        }
    },
    Update: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtCode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtNameOth: {
            type: GraphQLString
        },
        FTPdtNameShort: {
            type: GraphQLString
        },
        FTPdtNameShortEng: {
            type: GraphQLString
        },
        FTPdtStkCode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPunCode: {
            type: GraphQLString
        },
        FTSplCode: {
            type: GraphQLString
        }
    },
    Remove: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtCode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtNameOth: {
            type: GraphQLString
        },
        FTPdtNameShort: {
            type: GraphQLString
        },
        FTPdtNameShortEng: {
            type: GraphQLString
        },
        FTPdtStkCode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPunCode: {
            type: GraphQLString
        },
        FTSplCode: {
            type: GraphQLString
        }
    },
    Delete: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtCode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPdtNameOth: {
            type: GraphQLString
        },
        FTPdtNameShort: {
            type: GraphQLString
        },
        FTPdtNameShortEng: {
            type: GraphQLString
        },
        FTPdtStkCode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FTPunCode: {
            type: GraphQLString
        },
        FTSplCode: {
            type: GraphQLString
        },
    }
};