const db = require("../models");

const controller = {
    findAllByAccount: (req, res) => {
        db.Posts.findAll({
            where: {
                inactive: false,
                accountID: req.params.accountID,
            }
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllByItem: (req, res) => {
        db.Posts.findAll({
            where: {
                item: req.params.item,
                inactive: false
            }
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllByPrice: (req, res) => {
        db.Posts.findAll({
            where: {
                price: req.params.price,
                inactive: false
            }
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: (req, res) => {
        db.Posts.findOne({
            where: {
                postID: req.params.postID,
                inactive: false
            }
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: (req, res) => {
        db.Posts.findAll({
            where: {
                inactive: false
            }
        })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    },
    newPost: (req, res) => {
        db.Posts.create({
            accountId: req.body.accountId,
            accountName: req.body.accountName,
            item: req.body.item,
            image: req.body.image,
            price: req.body.price,
            postID: req.body.postID
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }, deletePost: (req, res) => {
        db.Posts.update({
            where: {
                postID: req.params.postID
            },
            inactive: true
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};

export { controller as default };