const db = require('../models');

const controller = {
    findAll: (req, res) => {
        db.Account.findAll({
            where: {
                inactive: false
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Account.findOne({
            where:{
                id: req.params.id,
                inactive: false
            }
        })
        .then(dbModel => {
            if(dbModel){
                res.json(dbModel);
            }else{
                res.status(404).json({
                    message: 'Id not found.'
                });
            }
        })
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        console.log(req.body);
        db.Account.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },
    update: function(req, res){
        db.Account.update({
            name: req.body.name,
        }, {
            where: {
                username: req.params.username,
                inactive: false
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Account.update({
            inactive: true
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};

export { controller as default };