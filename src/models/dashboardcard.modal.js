const Sequelize = require('sequelize')
const { DASHBOARDCARD } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const Dashboardcard = sequelize.define(
        DASHBOARDCARD,
        {
            card_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            card_name: {
                type: DataTypes.STRING,
                required: true,
            },
            card_count: {
                type: DataTypes.INTEGER,
                required: true,
            },
            card_image: {
                type: DataTypes.STRING
            },
        },
        {
            timestamps: false,
            tableName: "dashboard_card",
        }
    );
    Dashboardcard.sync()
    return Dashboardcard
}