module.exports = function(sequelize, DataTypes) {
    var Friends = sequelize.define("Friends", {
      accountID: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      friendID: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
      inactive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Friends;
  };
  