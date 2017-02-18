'use strict';

var mongoose = require('mongoose');
var local_DB_uri = 'mongodb://localhost/ecommerce'

mongoose.connect(process.env.MONGODB_URI || local_DB_uri, function(err) {
  if(err) {
    console.log('Failed connecting to Mongodb! -sc');
  } else {
    console.log('Successfully connected to mongodb!');
  }
});

// NOTE: See .env file for enviroment specific Database connections
// NOTE: Development db uri -> 'mongodb://localhost/listpls3'
