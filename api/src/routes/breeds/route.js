const { Router } = require('express');
const { getBreeds, breedForId } = require('./controllers')
const router = Router();

router.get('/', getBreeds);
router.get('/:idRaza', breedForId);


module.exports = router;