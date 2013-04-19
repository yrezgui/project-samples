// Config
var config = require('../config');

//Packages
var mongoose = require('mongoose');

// Database Connection
mongoose.connect(config.db.uri);
