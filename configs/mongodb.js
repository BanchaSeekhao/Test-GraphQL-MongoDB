'use strict';

module.exports = {
     //MongoDB
    MongoDB_Database_Name: 'mymongodb',
    MongoDB_ConStr: 'mongodb://localhost:27017/mymongodb',
    //MongoDB_Atlas_ConStr: 'mongodb+srv://admin:adasoft@cluster0-2pens.gcp.mongodb.net/mymongodb?retryWrites=true&w=majority',
    MongoDB_Atlas_ConStr: 'mongodb+srv://admin:adasoft@cluster0-2pens.gcp.mongodb.net/mymongodb',
    Use_MongoDB_Atlas: true,

    //Replicate MsSql to MongoDB
    MsSql_ConStr: 'Provider=SQLOLEDB.1;Data Source=.\\SQLEXPRESS;User ID=sa;Password=adasoft;Initial Catalog=SFMPOSON',
    //mongoConnectionString: 'mongodb://localhost:27017', // This puts the resulting database in MongoDB running on your local PC.
    ////mongoConnectionString: 'mongodb+srv://admin:adasoft@cluster0-2pens.gcp.mongodb.net/mymongodb?retryWrites=true&w=majority', // This puts the resulting database in MongoDB running on your local PC.
    //targetDatabaseName: 'sfmpos', // Specify the MongoDB database where the data will end up.
    repTable: [ // Add the tables here that you want to replicate to MongoDB.
        'TCNMPdt', 
        'TCNMPdtBar',
        'TCNMPdtUnit',
        'TCNMPdtType',
        'TCNMSpl',
        'TCNMSplType'
    ],
    skipTable: [ // Add the tables here that you don't want to replicate to MongoDB.
        'sql-table-to-skip-1', 
        'sql-table-to-skip-2'
    ],
    remapKeys: false, // Set this to false if you want to leave table keys as they are, set to true to remap them to MongoDB ObjectId's.
    ignorePrimaryKey: true
};
