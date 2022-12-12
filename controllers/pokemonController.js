const {Pokemon} = require('../models')
const types = ['Water', 'Fire', 'Grass', 'Rock', 'Psychic']
module.exports.viewAll = async function(req, res, next){
    const pokemons = await Pokemon.findAll();
    res.render('index', {pokemons})
}

module.exports.renderEditForm = async function(req, res, next){
    const pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemon});
}