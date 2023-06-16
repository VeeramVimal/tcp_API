const Sequelize = require('sequelize')
const { CLOCKTIME, USER } = require("../constants/tables")

module.exports = (sequelize, DataTypes) => {
    const ClockTime = sequelize.define(
        CLOCKTIME,{
            clock_id:{
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
            date:{
                type: DataTypes.STRING,
            },
            start_time:{
                type: DataTypes.STRING,
            },
            end_time:{
                type: DataTypes.STRING,
            },
            total_hours:{
                type: DataTypes.STRING,
            },
            count:{
                type: DataTypes.INTEGER,
            }
        },
            {
                timestamps: false,
                tablename: "clockTime"

        });
        ClockTime.sync();
        return ClockTime
}