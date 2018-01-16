import express from "express";
import account from "../controllers/accountController";

const router = express.Router();

router.get('/api/user', account.findAll);
router.get('/api/user/:id', account.findById);
router.post('/', account.create);
router.put('/:username', account.update);
router.delete('/:id', account.remove);

export default router;