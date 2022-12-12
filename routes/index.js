var express = require('express');
var router = express.Router();

const pokemonController = require('../controllers/pokemonController')

router.get('/', pokemonController.viewAll)

router.get('/edit/:id', pokemonController.renderEditForm)

module.exports = router;
