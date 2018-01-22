module.exports = function (sequelize, DataTypes) {
  var Posts = sequelize.define("Posts", {
    accountId: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
    },
    accountName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    item: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    postID: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true
    },
    inactive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Posts;
};
