const { EMPLOYEEORG, USER, ORGANIZATION } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const EmployeeOrg = sequelize.define(
        EMPLOYEEORG,
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                reference:{
                    model: USER,
                    key: 'user_id'
                },
                required: true
            },
            organisation_id: {
                type: DataTypes.INTEGER,
                reference:{
                    model: ORGANIZATION,
                    key: 'organisation_id'
                },
                required: true
            }
        },
        {
            timestamps: false,
            tableName: "employee_org",
        }
    );
    // EmployeeOrg.sync()
    return EmployeeOrg
}