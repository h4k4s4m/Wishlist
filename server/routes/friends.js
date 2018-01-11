import express from "express";
import friends from "../controllers/friendsController";

const router = express.Router();

router.get('/:accountID', friends.findAllFriends);
router.post('/', friends.create);

export default router;