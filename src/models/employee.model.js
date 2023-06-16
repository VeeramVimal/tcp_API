const { EMPLOYEE, USER } = require('../constants')

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define(
        EMPLOYEE,
        {
            employee_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                reference:{
                    model: USER,
                    key:'user_id'
                },
                required: true,
            },
            employee_firstname: {
                type: DataTypes.STRING,
                required: true
            },
            employee_lastname: {
                type: DataTypes.STRING
            },
            employee_dob: {
                type: DataTypes.DATE,
                required: true
            },
            employee_gender: {
                type: DataTypes.INTEGER,  
            },
            employee_phone: {
                type: DataTypes.STRING,
            },
            employee_avatar: {
                type: DataTypes.STRING,
                allowNull: true
            },
            employee_address: {
                type: DataTypes.STRING,
                required: true
            },
            employee_qualification: {
                type: DataTypes.INTEGER,
            },
            employee_designation: {
                type: DataTypes.INTEGER,
                required: true
            },
            employee_skills: {
                type: DataTypes.STRING,
            },
            employee_status: {
                type: DataTypes.INTEGER,
            }
        },
        {
            timestamps: false,
            tablename: "employee"
        });
    Employee.sync();
    return Employee
}
