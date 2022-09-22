const { Router } = require('express');
const { deleteBreeds } = require('./controller.js') 

const route = Router();

route.get('/:id',deleteBreeds)

module.exports = route;