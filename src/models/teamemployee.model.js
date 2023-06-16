const { TEAMEMPLOYEE, USER, EMPLOYEE, TEAM } = require('../constants')

module.exports = (sequelize, DataTypes) => {
    const Teamemployee = sequelize.define(
        TEAMEMPLOYEE,
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                reference: {
                    model: USER,
                    key: "user_id"
                },
                required: true
            },
            team_id: {
                type: DataTypes.INTEGER,
                reference: {
                    model: TEAM,
                    key: "team_id"
                },
                required: true
            }
        },
        {
            timestamps: false,
            tablename: "team_employee"
        });
    // Teamemployee.sync();
    return Teamemployee
}