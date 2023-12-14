const ciso = require('../models/game/ciso');

exports.createFight = async (req, res, next) => {


    try {
        res.render('game',{});
    } catch (error) {
        console.error(error);
        next(error);
    }
};

