const Sequelize = require('sequelize');
const { CLIENTDETAILS } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
    const Clientdetails = sequelize.define(CLIENTDETAILS, {
        client_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        client_name:{
            type: DataTypes.STRING,
            required: true
        },
        client_phone:{
            type: DataTypes.STRING,
        },
        client_address:{
            type: DataTypes.STRING,
        },
        client_country:{
            type: DataTypes.STRING,
        },
        client_websiteurl:{
            type: DataTypes.STRING
        },
        contact_firstname:{
            type: DataTypes.STRING
        },
        contact_middlename:{
            type: DataTypes.STRING
        },
        contact_lastname:{
            type: DataTypes.STRING
        },
        contact_email:{
            type: DataTypes.STRING,
            required: true,
        },
        contact_phone:{
            type: DataTypes.STRING
        },
        status:{
            type: DataTypes.INTEGER,
            required: true,
        }
    },
    {
      timestamps: false,
      tableName: "client_details"
    })
    Clientdetails.sync()
    return Clientdetails
}