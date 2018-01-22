module.exports = function (sequelize, DataTypes) {
    const Comments = sequelize.define('comments', {
        postID : {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        text : {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        accountID : {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        inactive : {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Comments;
}