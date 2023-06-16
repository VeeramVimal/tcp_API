const Sequelize = require('sequelize');
const { JOBLOCATION } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
  const JobLocation = sequelize.define(
    JOBLOCATION,
    {
       location_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      location_name: {
        type: DataTypes.STRING,
        required: true,
      },
      status: {
        type: DataTypes.INTEGER,
        required: true,
      }
    },
    {
      timestamps: false,
      tableName: 'job_location',
    }
  );
  JobLocation.sync();
  return JobLocation;
};
