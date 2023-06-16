const Sequelize = require('sequelize');
const { JOBAPPLICATION } = require('../constants/tables');
const { Applicant } = require('../models')

module.exports = (sequelize, DataTypes) => {
  const JobApplication = sequelize.define(
    JOBAPPLICATION,
    {
      jobapplicantion_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      applicant_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
        required: true,
      },
    },
    {
      timestamps: true,
      tableName: 'job_application',
    }
  );
  JobApplication.sync();
  return JobApplication;
};
