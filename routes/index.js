var express = require('express');
var router = express.Router();

const pokemonController = require('../controllers/pokemonController')

router.get('/', pokemonController.viewAll)

router.get('/edit/:id', pokemonController.renderEditForm)

router.post('/edit/:id', pokemonController.updateCard)

router.get('/delete/:id', pokemonController.deleteCard)

router.get('/add', pokemonController.renderAddForm)

module.exports = router;
