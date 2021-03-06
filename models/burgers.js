module.exports = function(sequelize, DataTypes){
    var Burgers = sequelize.define("Burgers", {
        id :{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING
        },
        devoured:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
        timestamps: false
    })
    
    return Burgers;
}