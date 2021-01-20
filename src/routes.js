const express = require('express');
const routes = express.Router();

var base = require('./samples/base')
var math = require('./samples/math')


// Users
routes.get('/base', function (req, res) {
  base
})

routes.get('/math', function (req, res) {
  math
})

module.exports = routes
