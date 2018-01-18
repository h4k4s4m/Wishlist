import passport from 'passport';
import db from '../server/models';
import local from 'passport-local';
const LocalStrategy = local.Strategy;

// Telling passport we want to use a Local Strategy. In other words, we want login with a username and password
passport.use(new LocalStrategy(
  // Our user will sign in using a "username"
  {
    usernameField: "username"
  },
  function(username, password, done) {
    // When a user tries to sign in this code runs
    db.Account.findOne({
      where: {
        username: username
      }
    }).then(function(dbAccount) {
      // If there's no user with the given username
      if (!dbAccount) {
        return done(null, false, {
          message: "Incorrect username." /// either credential is incorrect 
        });
      }
      // If there is a user with the given username, but the password the user gives us is incorrect
      else if (!dbAccount.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbAccount);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(account, cb) {
  cb(null, account);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
