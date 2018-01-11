const db = require('../models');

const controller = {
    findMyComments: (req, res) => {
        db.Comments.findAll({
            where: {
                accountID: req.params.postID,
                inactive: false
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(422).json(err));
    },
    findPostComments: (req, res) => {
        db.Comments.findAll({
            where: {
                postID: req.params.postID,
                inactive: false
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(422).json(err));
    }, 
    createComment: (req, res) => {
        db.Comments.create({
            postID: req.body.postID,
            text: req.body.text,
            accountID: req.body.accountID
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(422).json(err));
    } ,
    deleteComment: (req, res) => {
        db.Comments.update({
            where: {
                postID: req.params.postID,
                inactive: false
            },
            inactive: true
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(422).json(err));
    } 
};

export { controller as default };