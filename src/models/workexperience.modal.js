const Sequelize = require('sequelize')
const { WORKEXPERIENCE, USER } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const Workexperience = sequelize.define(
        WORKEXPERIENCE,
        {
            work_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            user_id:{
                type: DataTypes.INTEGER,
                // references:{
                //     model: USER,
                //     key: 'id'
                // },
                allowNull: true,
                required: true
            },
            work_title: {
                type: DataTypes.STRING,
                required: true,
            },
            work_company: {
                type: DataTypes.STRING,
                required: true,
            },
            work_timeperiod: {
                type: DataTypes.STRING,
                required: true,
            },
            work_description: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            timestamps: false,
            tableName: "work_experience"
        }
    );
    // Workexperience.sync()
    return Workexperience
}