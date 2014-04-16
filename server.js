'use strict';
var express = require('express');
var app = express();
var port = 3001;
var mongoose = require('mongoose');
var passport = require('passport');

var configDB = require('./config/database.js');

app.configure(function(){

})

require('./app/routes.js')(app, passport);

app.listen(port);

console.log('listening to port' + port);
