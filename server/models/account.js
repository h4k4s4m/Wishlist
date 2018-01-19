import bcrypt from 'bcrypt-nodejs';

module.exports = function (sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inactive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Account.hook("beforeCreate",  function(account) {
    account.password = bcrypt.hashSync(account.password, bcrypt.genSaltSync(10), null);
  });
  // Creating a custom method for our Account model. This will check if an unhashed password entered by the Account can be compared to the hashed password stored in our database
  Account.prototype.validPassword =  function(password) { 
    return bcrypt.compareSync(password, this.password);
  };
  
  // Hooks are automatic methods that run during various phases of the Account Model lifecycle
  // In this case, before an Account is created, we will automatically hash their password
  
//   Account.beforeCreate(function(account, options) {
//     return cryptPassword(account.password)
//       .then(success => {
//         account.password = success;
//       })
//       .catch(err => {
//         if (err) console.log(err);
//       });
//   });

// function cryptPassword(password) {
//   console.log("cryptPassword" + password);
//   return new Promise(function(resolve, reject) {
//     bcrypt.genSalt(10, function(err, salt) {
//       // Encrypt password using bycrpt module
//       if (err) return reject(err);

//       bcrypt.hash(password, salt, null, function(err, hash) {
//         if (err) return reject(err);
//         return resolve(hash);
//       });
//     });
//   });
// };
 

  return Account;
};
