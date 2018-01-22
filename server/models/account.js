import bcrypt from 'bcrypt-nodejs';

module.exports = function (sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
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
  
  return Account;
};
