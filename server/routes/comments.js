import express from "express";
import account from "../controllers/accountController";

const router = express.Router();
router.get('/:accountID', comments.findMyComments);
router.get('/:postID', comments.findPostComments);
router.post('/', comments.createComment);
router.put('/:postID', comments.deleteComment);

export default router;