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
        authorid: {
            name: 'authorid',
            type: GraphQLString
        },
        firstname: {
            name: 'firstname',
            type: GraphQLString
        },
        lastname: {
            name: 'lastname',
            type: GraphQLString
        },
        birthdate: {
            name: 'birthdate',
            type: GraphQLDate
        },
        gender: {
            name: 'gender',
            type: GraphQLString
        },
        email: {
            name: 'email',
            type: GraphQLString
        },
        phone: {
            name: 'phone',
            type: GraphQLString
        },
        faceid: {
            name: 'faceid',
            type: GraphQLString
        },
        lineid: {
            name: 'lineid',
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
        authorid: {
            type: new GraphQLNonNull(GraphQLString)
        },
        firstname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        birthdate: {
            type: GraphQLDate
        },
        gender: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        faceid: {
            type: GraphQLString
        },
        lineid: {
            type: GraphQLString
        }
    },
    Update: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        },
        authorid: {
            type: new GraphQLNonNull(GraphQLString)
        },
        firstname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastname: {
            type: GraphQLString
        },
        birthdate: {
            type: GraphQLDate
        },
        gender: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        faceid: {
            type: GraphQLString
        },
        lineid: {
            type: GraphQLString
        }
    },
    Remove: {
        id: {
            name: 'id',
            type: GraphQLString
        },
        authorid: {
            type: GraphQLString
        },
        firstname: {
            type: GraphQLString
        },
        lastname: {
            type: GraphQLString
        },
        birthdate: {
            type: GraphQLDate
        },
        gender: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        faceid: {
            type: GraphQLString
        },
        lineid: {
            type: GraphQLString
        }
    },
    Delete: {
        id: {
            name: 'id',
            type: GraphQLString
        },
        authorid: {
            type: GraphQLString
        },
        firstname: {
            type: GraphQLString
        },
        lastname: {
            type: GraphQLString
        },
        birthdate: {
            type: GraphQLDate
        },
        gender: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        faceid: {
            type: GraphQLString
        },
        lineid: {
            type: GraphQLString
        }
    }
};