const db = require("../models");

const controller = {
    findAllFriends: (req, res) => {
        db.Friends.findAll({
            where: {
                inactive: false,
                accountID: req.params.accountID
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    addNewFriend: (req, res) => {
        db.Friends.create({
            accountID: req.body.accountID,
            friendID: req.body.friendID,
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};

export {controller as default };