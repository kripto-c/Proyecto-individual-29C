const { Router } = require('express');
const express = require('express');
const breeds = require('./breeds/route');
const createBread = require('./CreateBreeds/router')
const Temperaments = require('./Temperaments/router');
const deleteBreeds = require('./deleteBreeds/router');
// Importar todos los routers;
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json())
router.use('/dogs', breeds);
router.use('/dogs', createBread);
router.use('/temperaments', Temperaments);
router.use('/breedsDelete', deleteBreeds);

module.exports = router;
