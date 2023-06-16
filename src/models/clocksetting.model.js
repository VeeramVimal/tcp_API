const Sequelize = require('sequelize')
const { CLOCKSETTING, USER } = require("../constants/tables")

module.exports = (sequelize, DataTypes) => {
    const clockSetting = sequelize.define(
        CLOCKSETTING,{
            setting_id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            user_id:{
                type: DataTypes.INTEGER,
                foreignKey: true,
                reference:{
                    model: USER,
                    key: 'user_id'
                }, 
                required: true,
            },
            added_date:{
                type: DataTypes.STRING,
            },
            updated_date:{
                type: DataTypes.STRING,
            },
            counts:{
                type: DataTypes.STRING,
            }
        },
            {
                timestamps: false,
                tablename: "clockSetting"

        });
        clockSetting.sync();
        return clockSetting
}