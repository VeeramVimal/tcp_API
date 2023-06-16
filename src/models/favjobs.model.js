const { FAVJOBS, USER, JOBSLIST } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const FavJobs = sequelize.define(
        FAVJOBS
        ,{
        favjob_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: USER,
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
        }
      },
      {
        timestamps: false,
        tableName: "fav_jobs",
      })
      // FavJobs.sync()
    return FavJobs
}