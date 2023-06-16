const { TIME, TASK, PROJECT } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define(
    TIME,
    {
      time_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      task_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        reference: {
          model: TASK,
          key: 'task_id'
        },
        required: true,
      },
      project_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        reference: {
          model: PROJECT,
          key: 'project_id'
        },
        required: true,
      },
      start_Date: {
        type: DataTypes.DATE,
        required: true,
      },
      start_Time: {
        type: DataTypes.DATE,
        required: true,
      },
      end_Date: {
        type: DataTypes.DATE,
        required: true,
      },
      end_Time: {
        type: DataTypes.DATE,
        required: true,
      },
      memo: {
        type: DataTypes.STRING,
        required: true,
      },
      total_Hours: {
        type: DataTypes.STRING,
        required: true,
      }
    },
    {
      timestamps: false,
      tableName: "time",
    }
  );
  // Time.sync();
  return Time;
};
