module.exports = function(sequelize, DataTypes) {
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
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1,50]
        }
      },
      inactive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Account;
  };
  