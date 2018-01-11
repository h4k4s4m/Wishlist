import express from "express";
import donations from "../controllers/donationsController";

const router = express.Router();

router.get('/:postID', donations.findDonationsForAPost);
router.get('/:accountID', donations.findDonationsFromAUser);
router.post('/', donations.create);
router.put('/:postID', donations.update);

export default router;