const Sequelize = require('sequelize');
const { JOBSKILS } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
  const JobSkils = sequelize.define(
    JOBSKILS,
    {
       skil_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      skil_name: {
        type: DataTypes.STRING,
        required: true,
      },
      Status: {
        type: DataTypes.INTEGER,
        required: true,
      }
    },
    {
      timestamps: false,
      tableName: 'job_skils',
    }
  );
  JobSkils.sync();
  return JobSkils;
};
