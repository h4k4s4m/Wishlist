import routers from "./routes";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";
import myPath from 'path';
import isAuthenticated from '../config/middleware/isAuthenticated';
import passport from '../config/passport';
import session from 'express-session';

export default path => {
  // Create Instance of Express
  const app = express();
  app.use(cors());

  // Run Morgan for Logging
  //app.use(logger("dev"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(express.static(`${path}/client`));
  app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true, cookie: { secure: true } }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/', routers.account);
  app.use('/api/donations', routers.donations);
  app.use('/api/friends', routers.friends);
  app.use('/api/posts', routers.posts);
  app.use('/api/comments', routers.comments);


  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    console.log("test logout");
    res.redirect("/");
  });

  console.log(`${isAuthenticated}: this is testing the auth`);
  app.get("/profile", isAuthenticated, function (req, res) {
    res.sendFile(`${path}/client/index.html`);
  });
  // Any non API GET routes will be directed to our React App and handled by React Router
  app.get("*", (req, res) => {
    res.sendFile(`${path}/client/index.html`);
  });

  


  return app;
  // -------------------------------------------------
};
