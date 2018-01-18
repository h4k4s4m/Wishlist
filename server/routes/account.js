import express from "express";
import account from "../controllers/accountController";
import passport from "../../config/passport";

const router = express.Router();
router.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the profile page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json({
        url: "/profile",
        loggedin: true
    });
});
router.get('/api/user', account.findAll);
router.get('/api/user/:id', account.findById);
router.post('/api/account', account.create);
router.put('/api/account/:username', account.update);
router.delete('/api/account/:id', account.remove);

export default router;