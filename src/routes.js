const express = require('express');
const routes = express.Router();

// var base = require('./samples/base')
// var math = require('./samples/math')
//var strings = require('./samples/strings')
//var templateString = require('./samples/templateString')
var nullUndefined = require('./samples/nullUndefined')

routes.get('/nullUndefined', function (req, res) {
  nullUndefined
})

module.exports = routes
