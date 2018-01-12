const db = require("../models");

const controller = {
    findDonationsForAPost: (req, res) => {
        db.Donations.findAll({
            where: {
                postID: req.params.postID,
                inactive: false
            }
        })
        .then(dbModel => {
            if(dbModel) {
                res.json(dbModel);
            }else {
                res.status(404).json({
                    message: 'DONATIONS NOT FOUND.'
                });
            }
        })
        .catch(err => res.status(422).json(err));
    },
    findDonationsFromAUser: (req, res) => {
        db.Donations.findAll({
            where: {
                accountID: req.params.accountID,
            } 
        })
        .then (dbModel => {
            if(dbModel) {
                res.json(dbModel);
            }else {
                res.status(404).json({
                    message: 'DONATIONS NOT FOUND.'
                });
            }
        })
        .catch(err => res.status(422).json(err));
    },
    createNewDonation: (req, res) => {
        db.Donations.create({
            accountID : req.body.accountID,
            amount : req.body.amount,
            postID : req.body.postID
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Donations.update({
            where: {
                postID: req.params.postID
            },
            amount: req.body.amount
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};

export { controller as default };