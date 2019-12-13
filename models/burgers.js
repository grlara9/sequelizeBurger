module.exports = function(sequelize, DataTypes){
    var Burgers = sequelize.define("Burgers", {
        id :{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured:{
            type: DataTypes.BOOLEAN
        }
    }
    );
    createdAt: false
    updatedAt: false
    return Burgers;
}