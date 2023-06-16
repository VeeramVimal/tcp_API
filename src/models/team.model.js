const { TEAM } = require('../constants')

module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define(
        TEAM,
        {
            team_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true
            },
            team_name: {
                type: DataTypes.STRING,
                required: true
            }
        },
        {
            timestamps: false,
            tablename: "team"
        });
    Team.sync();
    return Team
}