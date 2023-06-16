const Sequelize = require('sequelize')
const { LEADS } = require('../constants/tables')

module.exports = (Sequelize, DataTypes) => {
    const Leads = Sequelize.define(
        LEADS,
        {
            lead_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            salutation: {
                type: DataTypes.INTEGER,
            },
            lead_name: {
                type: DataTypes.STRING,
                required: true,
            },
            lead_email: {
                type: DataTypes.STRING,
                required: true,
            },
            choose_agent: {
                type: DataTypes.INTEGER,
            },
            lead_source: {
                type: DataTypes.INTEGER,
            },
            lead_category: {
                type: DataTypes.INTEGER,
            },
            lead_value: {
                type: DataTypes.STRING,
            },
            allow_followup: {
                type: DataTypes.INTEGER,
            },
            status: {
                type: DataTypes.INTEGER,
                required: true,
            },
            note: {
                type: DataTypes.STRING,
            },
            company_name: {
                type: DataTypes.STRING,
            },
            website: {
                type: DataTypes.STRING,
            },
            mobile: {
                type: DataTypes.STRING,
            },
            office_phone_number: {
                type: DataTypes.STRING,
            },
            country: {
                type: DataTypes.INTEGER,
            },
            state: {
                type: DataTypes.STRING,
            },
            city: {
                type: DataTypes.STRING,
            },
            postal_code: {
                type: DataTypes.STRING,
            },
            address: {
                type: DataTypes.STRING,
            },

        },
        {
            timestamps: false,
            tableName: "leads",
        }
    );
    Leads.sync()
    return Leads
}