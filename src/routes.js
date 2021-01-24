const express = require('express');
const routes = express.Router();

// var base = require('./samples/base')
// var math = require('./samples/math')
//var strings = require('./samples/strings')
//var templateString = require('./samples/templateString')
var functions = require('./samples/function')

routes.get('/function', function (req, res) {
  functions
})

module.exports = routes
