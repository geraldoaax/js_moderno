const express = require('express');
const routes = express.Router();
import base from './samples/base'
import math from './samples/math'


// Users
routes.get('/base', base)
routes.get('/math', math)

module.exports = routes
