const Sequelize = require('sequelize')
const { ASSETS } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const Assets = sequelize.define(
        ASSETS,
        {
            assets_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            assets_name: {
                type: DataTypes.STRING,
                required: true,
            }, 
            assets_value: {
                type: DataTypes.STRING,
                required: true,
            },
            assets_location: {
                type: DataTypes.STRING,
                required: true,
            },
            assets_serialno: {
                type: DataTypes.INTEGER,
                required: true,
            },
            assets_picture: {
                type: DataTypes.STRING,
                allowNull: true
            },
            assets_type: {
                type: DataTypes.STRING,
                required: true,
            },
            assets_details: {
                type: DataTypes.STRING,
                allowNull: true
            },
            assets_status: {
                type: DataTypes.STRING,
                required: true,
            }
        },
        {
            timestamps: false,
            tableName: "assets",
        }
    );
    Assets.sync()
    return Assets
}