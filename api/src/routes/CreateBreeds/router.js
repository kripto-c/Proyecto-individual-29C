const {Router} = require('express');
const { createBread } = require('./controllers')
const route = Router();

route.post('/', createBread);


module.exports = route