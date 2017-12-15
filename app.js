const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'kursach';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {

    console.log(err);

    const db = client.db(dbName);
  /*  db.createCollection("Teams", {
        'validator': {
            '$jsonSchema' : {
                'bsonType': 'object',
                'required' : [ 'name', 'players', 'region' ],
                'properties' : {
                    'name' : {
                        'bsonType': 'string'
                    },
                    'region' : {
                        'bsonType': 'string'
                    },
                    'players' : {
                        'bsonType': 'array'
                    }
                }
            }
        }
    },
        function(err, results) {
            console.log(err);
        });*/
   /* db.collection('Teams').insertOne({
       'name': 'navy',
       'region': 'Russia',
        'players': [
            'SilverName',
            'INNER'
        ]
    },function(err, results) {
        console.log(err);
    });*/

    db.createCollection("Tournaments", {
            'validator': {
                '$jsonSchema' : {
                    'bsonType': 'object',
                    'required' : [ 'name', 'game', 'format', 'stage' ],
                    'properties' : {
                        'name' : {
                            'bsonType': 'string'
                        },
                        'game' : {
                            'bsonType': 'object',
                            'required': ['name', "type"],
                            'properties': {
                                'name' : {
                                    'bsonType': 'string'
                                },
                                'type' : {
                                    'bsonType': 'string'
                                }
                            }
                        },
                        'format' : {
                            'bsonType': 'object',
                            'required': ['name', "description"],
                            'properties': {
                                'name' : {
                                    'bsonType': 'string'
                                },
                                'description' : {
                                    'bsonType': 'string'
                                }
                            }
                        }, 'stages':{
                            'bsonType': 'array',
                            'items': {
                                'type':  'object', 'properties': {
                                    "date": {'bsonType': "string"},
                                    "name": {'bsonType': "string"},
                                    "matches" : {
                                        'bsonType': 'array',
                                        'items': {
                                            'type':  'object', 'properties': {
                                                "team1_id": {'bsonType': "objectId"},
                                                "team2_id": {'bsonType': "objectId"},
                                                "score" : {'bsonType': 'string'}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        function(err, results) {
            console.log(err);
        });


    db.collection('Teams').find({'name': 'navy'}).toArray().then(function (doc) {

            if(doc !== []){
                console.log(doc)
                client.close()
            }   else {
                console.log(err)
                client.close()
            }

    }, function (v) {
        console.log(v)
        client.close()
    });
});