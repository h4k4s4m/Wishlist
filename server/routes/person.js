import express from "express";
import person from "../controllers/peopleController"

const router = express.Router();

// Route to get list of crypto currencies for drop down.
router.get("/", person.findAll);
router.get("/:id", person.findById);
router.post("/", person.create);
router.put("/:id", person.update);
router.delete("/:id", person.remove);

// Export routes for server.js to use.
export default router;
