const express = require('express');
const routes = express.Router();

// var base = require('./samples/base')
// var math = require('./samples/math')
//var strings = require('./samples/strings')
//var templateString = require('./samples/templateString')
var base = require('./fundamentos/unarios')

routes.get('/', function (req, res) {
  base
})

module.exports = routes
