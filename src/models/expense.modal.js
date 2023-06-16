const Sequelize = require('sequelize')
const { EXPENSE, EMPLOYEE, PROJECT } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define(
        EXPENSE,
        {
            item_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            item_name: {
                type: DataTypes.STRING,
                required: true,
            },
            price: {
                type: DataTypes.STRING,
                required: true,
            },
            employee_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                reference:{
                    model: EMPLOYEE,
                    key:'employee_id'
                },
                required: true,
            },
            project_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                reference:{
                    model: PROJECT,
                    key:'project_id'
                },
                required: true,
            },
            purchased_date: {
                type: DataTypes.DATE,
                required: true,
            },
            purchased_from: {
                type: DataTypes.STRING,
                required: true,
            },
            status: {
                type: DataTypes.STRING,
                required: true,
            },
            item_type: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_currency: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_project: {
                type: DataTypes.INTEGER,
                reference:{
                    model: PROJECT,
                    key:'project_id'
                },
                required: true,
            },
            expense_category: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_bill: {
                type: DataTypes.STRING
            },
            expense_accountshead: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_company: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_tds: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_gst: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_paymentmode: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_paymenttype: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_billnumber: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_payamount: {
                type: DataTypes.INTEGER,
                required: true,
            },
            expense_remarks: {
                type: DataTypes.STRING,
                required: true,
            },
            expense_billdate: {
                type: DataTypes.DATE,
                required: true,
            },
            expense_paymentdate: {
                type: DataTypes.DATE,
                required: true,
            },
            expense_tdsapplicable: {
                type: DataTypes.INTEGER,
                required: true,
            },
            expense_gstapplicable: {
                type: DataTypes.INTEGER,
                required: true,
            },

        },
        {
            timestamps: false,
            tableName: "expense",
        }
    );
    // Expense.sync()
    return Expense
}