'use strict'

// THIS IS THE API module

var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var jwt = require('express-jwt');


var User = require('../models/userSchema.js');
var Group = require('../models/groupSchema.js');

// defining a router to prefix things with the '/api' namespace
var router = express.Router();

router.get('/group/', function(req, res) {
  // getting the data from database
  if (err) {
    return res.status(500).json({message: err.message});
  } else {
    return res.status(200).json({message: req});
  }

});

module.exports = router;
