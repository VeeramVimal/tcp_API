const Sequelize = require('sequelize')
const { GIVENASSESTS, ASSETS, USER } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const Assets = sequelize.define(
        GIVENASSESTS,
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            assets_id: {
                type: DataTypes.INTEGER,
                reference:{
                    model: ASSETS,
                    key:'assets_id'
                },
                required: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                reference:{
                    model: USER,
                    key:'id'
                },
                required: true,
            },
            assets_dategiven: {
                type: DataTypes.DATE,
                required: true,
            },
            assets_datereturn: {
                type: DataTypes.DATE,
                required: true,
            },
            assets_notes: {
                type: DataTypes.STRING,
                required: true,
            },
            assets_status: {
                type: DataTypes.INTEGER,
                required: true,
            },
        },
        {
            timestamps: false,
            tableName: "givenassets",
        }
    );
    // Assets.sync()
    return Assets
}