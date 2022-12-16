const {Pokemon} = require('../models')
const e = require("express");
const types = ['Water', 'Fire', 'Grass', 'Rock', 'Electric']
module.exports.viewAll = async function(req, res){
    let searchTypes = ['All'];
    for(let i = 0; i<types.length; i++){
        searchTypes.push(types[i]);
    }
    let pokemons;
    let searchType = req.query.category || 'All';
    let searchRandom = req.query.random || false;
    if(searchType === 'All'){
        pokemons = await Pokemon.findAll();
    } else{
        pokemons = await Pokemon.findAll({
            where: {
                type: searchType
            }
        })
    }
    if (pokemons.length > 0 && searchRandom){
        let randomIndex = random(pokemons.length);
        pokemons = [pokemons[randomIndex]]
    }
    res.render('index', {pokemons, types:searchTypes, searchType, searchRandom})
}

module.exports.renderEditForm = async function(req, res, next){
    const pokemon = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit', {pokemon, types});
}

module.exports.updateCard = async function(req, res){
    await Pokemon.update(
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
            retreatC: req.body.retreatC,
        },
               {
            where:
                {
                    id: req.params.id
                }
        });
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

module.exports.addCard = async function(req, res){
    await Pokemon.create(
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
            retreatC: req.body.retreatC,
        });
    res.redirect('/')
}

// function getType(type){
//     if (type === "Water"){
//         return "water"
//         pokemon.type = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png"
//     } else if (type === "Fire"){
//         return "fire"
//     } else if (type === "Grass"){
//         return "grass"
//     } else if (type === "Rock"){
//         return "rock"
//     } else if (type === "Electric"){
//         return "electric"
//     } else{
//         return ""
//     }
// }

function random(int){
    return Math.floor(Math.random() * int)
}