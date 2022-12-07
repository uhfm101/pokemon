module.exports.viewAll = function(req, res, next){
    const pokemon = {
        id: 1,
        name: 'Mudkip',
        type: 'Water',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png',
        health: '50 hp',
        attack1: 'Water Gun',
        damage1: 40,
        energy1: 1,
        attack2: 'Water Pulse',
        damage2: 60,
        energy2: 2,
        weakness: 'Water',
        weaknessA: 1,
        resistance: 'water',
        resistanceA: 1,
        retreatC: 'water',
        retreatCA: 1
    }
    res.render('index', {pokemon})
}