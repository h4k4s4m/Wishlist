import App from './server';

// Requiring our models for syncing
import db from './server/models';

import posts from './server/controllers/postsController';

var PORT = process.env.PORT || 3001; // Sets an initial port. We'll use this later in our listener
// ensure environment variables are loaded

console.log(posts);
const app = App(__dirname);

//use sync({force:true}) to drop all tables before trying to create
db.sequelize.sync({force:true}).then(function() {  

  app.listen(PORT, function () {

    console.log('App listening on PORT: ' + PORT);
  });
});