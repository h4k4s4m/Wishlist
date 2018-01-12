import express from "express";
import comments from "../controllers/commentsController";

const router = express.Router();
router.get('/:accountID', comments.findMyComments);
router.get('/:postID', comments.findPostComments);
router.post('/', comments.createComment);
router.delete('/:postID', comments.deleteComment);

export default router;