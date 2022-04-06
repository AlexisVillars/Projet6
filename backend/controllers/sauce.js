const Sauce = require("../models/sauce");

/* Controleur recuperation all sauces */
exports.getAllSauce = (req, res, next) => {

    Sauce.find()
        .then((sauces) => {
            res.status(200).json(sauces);
        })
        .catch((error) => {
            res.status(400).json({
                error: error,
            });
        })
};

/* controleur de récupération une sauce */
exports.getOnesauce = (req, res, next) => {
    Sauce.findOne({
        _id: req.params.id
    }).then((sauces) => {
        res.status(200).json(sauces);
    }
    ).catch((error) => {
        res.status(400).json({
            error: error
        });
    }
    );
}









