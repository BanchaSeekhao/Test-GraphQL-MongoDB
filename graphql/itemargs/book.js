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
        bookid: {
            name: 'bookid',
            type: GraphQLString
        },
        isbn: {
            name: 'isbn',
            type: GraphQLString
        },
        title: {
            name: 'title',
            type: GraphQLString
        },
        authorid: {
            name: 'authorid',
            type: GraphQLString
        },
        description: {
            name: 'description',
            type: GraphQLString
        },
        published_year: {
            name: 'published_year',
            type: GraphQLInt
        },
        publisherid: {
            name: 'publisherid',
            type: GraphQLString
        },
        datecreated: {
            name: 'datecreated',
            type: GraphQLDate
        },
        dateupdated: {
            name: 'dateupdated',
            type: GraphQLDate
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
        bookid: {
            type: new GraphQLNonNull(GraphQLString)
        },
        isbn: {
            type: new GraphQLNonNull(GraphQLString)
        },
        title: {
            type: GraphQLString
        },
        authorid: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        published_year: {
            type: GraphQLInt
        },
        publisherid: {
            type: GraphQLString
        }
    },
    Update: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        bookid: {
            type: new GraphQLNonNull(GraphQLString)
        },
        isbn: {
            type: new GraphQLNonNull(GraphQLString)
        },
        title: {
            type: GraphQLString
        },
        authorid: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        published_year: {
            type: GraphQLInt
        },
        publisherid: {
            type: GraphQLString
        }
    },
    Remove: {
        id: {
            name: 'id',
            type: GraphQLString
        },
        bookid: {
            type: GraphQLString
        },
        isbn: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        authorid: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        published_year: {
            type: GraphQLInt
        },
        publisherid: {
            type: GraphQLString
        }
    },
    Delete: {
        id: {
            name: 'id',
            type: GraphQLString
        },
        bookid: {
            type: GraphQLString
        },
        isbn: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        authorid: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        published_year: {
            type: GraphQLInt
        },
        publisherid: {
            type: GraphQLString
        }
    }
};