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
    res.render('edit', {pokemon, types});
}

module.exports.updateCard = async function(req, res){
    const newP = await Pokemon.update(
        {
            name: req.body.name,
            type: req.body.type,
            image: req.body.image,
            health: req.body.health,
            attack1: req.body.attack1,
            damage1: req.body.damage1,
            energy1: req.body.energy1,
            attack2: req.body.attack2,
            damage2: req.body.damage2,
            energy2: req.body.energy2,
            weakness: req.body.weakness,
            resistance: req.body.resistance,
            retreatC: req.body.retreatC
        },
               {
            where:
                {
                    id: req.params.id
                }
        });
    console.log(newP)
    res.redirect('/')
}

module.exports.deleteCard = async function(req, res){
    await Pokemon.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        })
    res.redirect('/')
}

module.exports.renderAddForm = function(req, res){
    const pokemon = {
        name: " ",
        type: types[0],
        image: " ",
        health: 1,
        attack1: " ",
        damage1: 1,
        energy1: 1,
        attack2: " ",
        damage2: 1,
        energy2: 1,
        weakness: 1,
        resistance: 1,
        retreatC: 1
    };
    res.render('add', {pokemon, types});
}

module.exports.addCard = function(req, res){
    console.log("run")
    console.log(req.body.name)
   //  const newP = await Pokemon.create(
   //      {
   //          name: req.body.name,
   //          type: req.body.type,
   //          image: req.body.image,
   //          health: req.body.health,
   //          attack1: req.body.attack1,
   //          damage1: req.body.damage1,
   //          energy1: req.body.energy1,
   //          attack2: req.body.attack2,
   //          damage2: req.body.damage2,
   //          energy2: req.body.energy2,
   //          weakness: req.body.weakness,
   //          resistance: req.body.resistance,
   //          retreatC: req.body.retreatC
   //      });
   // console.log(newP)
    res.redirect('/')
}