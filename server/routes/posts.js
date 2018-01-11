import express from "express";
import posts from "../controllers/postsController";

const router = express.Router();

router.get("/:accountID", posts.findAllbyAccount );
router.get('/:item', posts.findAllbyItem);
router.get('/:price', posts.findAllbyPrice);
router.get('/:postID', posts.findOne);
router.post('/', posts.create);
router.delete('/:id', posts.update);

export default router;