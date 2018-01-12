const db = require("../models");

const controller = {
    findAllByAccount: (req, res) => {
        db.Posts.findAll({
            where: {
                inactive: false,
                accountID: req.params.accountID,
            }
        })
        .then(dbModel => re.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAllByItem: (req, res) =>{
        db.Posts.findAll({
            where: {
                item: req.params.item,
                inactive: false
            }
        })
        .then(dbModel => re.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAllByPrice: (req, res) =>{
        db.Posts.findAll({
            where: {
                price: req.params.price,
                inactive: false
            }
        })
        .then(dbModel => re.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne : (req, res) => {
        db.Posts.findOne({
            where: {
                postID: req.params.postID,
                inactive: false
            }
        })
        .then(dbModel => re.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    newPost: (req, res) => {
        db.Posts.create({
            where: {
                accountID: req.body.accountID,
                accountName: req.body.accountName,
                item: req.body.item,
                price: req.body.price,
                postID: req.body.postID
            }
        })
        .then(dbModel => re.json(dbModel))
        .catch(err => res.status(422).json(err));
    }, deletePost: (req, res ) => {
        db.Posts.update({
            where: {
                postID: req.params.postID
            },
            inactive: true
        })
        .then(dbModel => re.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};

export { controller as default };