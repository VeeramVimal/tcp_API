const Sequelize = require('sequelize');
const { JOBSLIST } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
  const Jobslist = sequelize.define(
    JOBSLIST,
    {
      job_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
     job_name: {
        type: DataTypes.STRING,
        required: true,
      },
      job_location: {
        type: DataTypes.STRING,
        required: true,
      },
      job_field: {
        type: DataTypes.STRING,
        required: true,
      },
      employment_type: {
        type: DataTypes.STRING,
        required: true,
      },
      posted_date: {
        type: DataTypes.DATE,
        required: true,
      },
      posted_by: {
        type: DataTypes.INTEGER,
        required: true,
      },
      company_name: {
        type: DataTypes.STRING,
        required: true,
      },
      company_website: {
        type: DataTypes.STRING,
        required: true,
      },
      company_logo: {
        type: DataTypes.STRING,
      },
      work_environment: {
        type: DataTypes.STRING,
       
      },
      job_experiance: {
        type: DataTypes.STRING,
        required: true,
      },
      job_worklevel: {
        type: DataTypes.STRING,
      },
      salary:{
        type: DataTypes.INTEGER,
        required: true,
      },
      industry: {
        type: DataTypes.STRING,
        required: true,
      },
      job_description: {
        type: DataTypes.STRING,
      },
      job_responsabilities:{
        type: DataTypes.STRING,
      },
      job_requirement: {
        type: DataTypes.STRING,
      },
      job_skils: {
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
      tableName: 'job_list',
    }
  );
  Jobslist.sync();
  return Jobslist;
};
