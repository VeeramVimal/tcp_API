const Sequelize = require('sequelize')
const { LEAVE,EMPLOYEE } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const Leave = sequelize.define(
        LEAVE,
        {
            leave_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            employee_id: {
                type: DataTypes.INTEGER,
                // foreignKey: true,
                reference:{
                    model: EMPLOYEE,
                    key:'employee_id'
                },
                required: true,
            },
            date: {
                type: DataTypes.STRING,
                required: true,
            },
            leave_type: {
                type: DataTypes.STRING,
                required: true,
            },
            status: {
                type: DataTypes.STRING,
                required: true,
            },
            reason: {
                type: DataTypes.STRING,
                required: true,
            },
            select_duration: {
                type: DataTypes.INTEGER,
                required: true,
            },
        },
        {
            timestamps: false,
            tableName: "leave",
        }
    );
    Leave.sync()
    return Leave
}