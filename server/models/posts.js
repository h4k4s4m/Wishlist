module.exports = function (sequelize, DataTypes) {
  var Posts = sequelize.define("Posts", {
    accountID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    accountName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    item: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    postID: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      allowNull: false
    },
    inactive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Posts;
};
