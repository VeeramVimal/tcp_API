const Sequelize = require('sequelize');
const { JOBCATEGORY } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
  const JobCategory = sequelize.define(
    JOBCATEGORY,
    {
       category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      category_name: {
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
      tableName: 'jobs_category',
    }
  );
  JobCategory.sync();
  return JobCategory;
};
