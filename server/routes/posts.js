import express from "express";
import posts from "../controllers/postsController";

const router = express.Router();
console.log(posts + " in posts.js");

router.get('/', posts.findAll);
router.get("/:accountID", posts.findAllByAccount );
router.get('/:item', posts.findAllByItem);
router.get('/:price', posts.findAllByPrice);
router.get('/:postID', posts.findOne);
router.post('/', posts.newPost);
router.delete('/:id', posts.deletePost);

export default router;