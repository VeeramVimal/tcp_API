const { ORGANIZATION } = require('../constants/tables')
const sequelize = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    const Organization = sequelize.define(
        ORGANIZATION, 
        {
            organisation_id:{
                type:DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true
            },
            organisation_name:{
                type:DataTypes.STRING,
                required:true
            },
            organisation_slogan:{
                type:DataTypes.STRING,
            },
            organisation_gst_number:{
                type:DataTypes.STRING,
            },
            organisation_type:{
                type:DataTypes.STRING
            },
            organisation_pan_number:{
                type:DataTypes.STRING
            },
            organisation_bank_details:{
                type:DataTypes.STRING,
                required:true
            },
            organisation_contact_name:{
                type:DataTypes.STRING,
                required:true

            },
            organisation_phone_number:{
                type:DataTypes.INTEGER,
                required:true
            },
            organisation_email:{
                type:DataTypes.STRING,
                required:true
            },
            organisation_address:{
                type:DataTypes.STRING,
                required:true
            },
            organisation_country:{
                type:DataTypes.STRING,
                required:true
            },
            organisation_tax_number:{
                type:DataTypes.INTEGER,
            },
            organisation_TDS_applicable:{
                type:DataTypes.BOOLEAN
            },
            organisation_website:{
                type:DataTypes.STRING
            },
            organisation_logo: {
                type:DataTypes.STRING
            }
        },
        {
            timestamps: true,
            tablename: "organization"
        });
    Organization.sync();
    return Organization
}