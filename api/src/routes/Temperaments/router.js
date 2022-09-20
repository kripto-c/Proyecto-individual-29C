const { Router } = require('express');
const { getTemperaments } = require('./controller.js') 

const route = Router();

route.get('/',getTemperaments)


module.exports = route;


