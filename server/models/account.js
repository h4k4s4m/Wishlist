import bcrypt from 'bcrypt-nodejs';

module.exports = function (sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
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

  // Creating a custom method for our Account model. This will check if an unhashed password entered by the Account can be compared to the hashed password stored in our database
  Account.prototype.validPassword =  (password) => bcrypt.compareSync(password, this.password);
  
  // Hooks are automatic methods that run during various phases of the Account Model lifecycle
  // In this case, before an Account is created, we will automatically hash their password
  Account.hook("beforeCreate",  (account) => {
    account.password = bcrypt.hashSync(account.password, bcrypt.genSaltSync(10), null);
  });

  return Account;
};
