module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    inactive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Person;
};
