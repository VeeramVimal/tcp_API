const Sequelize = require('sequelize')
const { CHARTS } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const Charts = sequelize.define(
        CHARTS,
        {
            chart_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            chart_name: {
                type: DataTypes.STRING,
                required: true,
            },
            chart_value: {
                type: DataTypes.INTEGER,
                required: true,
            },
            chart_percentage: {
                type: DataTypes.STRING,
                required: true,
            },
            chart_vsdays: {
                type: DataTypes.STRING,
                required: true,
            },
        },
        {
            timestamps: false,
            tableName: "charts",
        }
    );
    Charts.sync()
    return Charts
}