module.exports = function(sequelize, DataTypes) {
    var Donations = sequelize.define("Donations", {
      accountID: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      amount: {
          type: DataTypes.DECIMAL(10,3),
          allowNull: false,
      },
      postID: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      },
      inactive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Donations;
  };
  