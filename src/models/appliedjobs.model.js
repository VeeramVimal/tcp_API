const { APPLIEDJOBS, APPLICANTDETAILS, JOBSLIST } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
  const AppliedJobs = sequelize.define(APPLIEDJOBS
    , {
      appliedjob_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: APPLICANTDETAILS,
            key: 'user_id'
          },
        required: true
      },
      job_id: {
        type: DataTypes.INTEGER,
        references: {
            model: JOBSLIST,
            key: 'job_id'
        },
        required: true
      },
      status: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: true,
      tableName: "applied_jobs"
    })
  // AppliedJobs.sync()
  return AppliedJobs
}