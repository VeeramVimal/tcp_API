const { TASK, PROJECT, EMPLOYEE } = require("../constants/tables");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    TASK,
    {
      task_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      project_id: {
        type: DataTypes.INTEGER,
        reference: {
          model: PROJECT,
          key: "project_id",
        },
        required: true,
      },
      employee_id: {
        type: DataTypes.STRING,
        reference: {
          model: EMPLOYEE,
          key: "employee_id",
        },
        required: true,
      },
      task_title: {
        type: DataTypes.STRING,
        required: true,
      },
      task_category: {
        type: DataTypes.STRING,
      },
      start_date: {
        type: DataTypes.DATE,
        required: true,
      },
      due_date: {
        type: DataTypes.DATE,
      },
      planned_hours: {
        type: DataTypes.INTEGER,
      },
      task_private: {
        type: DataTypes.BOOLEAN,
      },
      with_due: {
        type: DataTypes.BOOLEAN,
      },
      task_Billable: {
        type: DataTypes.BOOLEAN,
        required: true,
      },
      task_Repeat: {
        type: DataTypes.BOOLEAN,
      },
      task_private: {
        type: DataTypes.BOOLEAN,
        required: true,
      },
      task_set_time: {
        type: DataTypes.BOOLEAN,
      },
      actual_hours: {
        type: DataTypes.INTEGER,
      },
      task_description: {
        type: DataTypes.STRING,
      },
      label: {
        type: DataTypes.STRING,
      },
      milestones: {
        type: DataTypes.STRING,
      },
      current_status: {
        type: DataTypes.STRING,
        required: true,
      },
      add_file: {
        type: DataTypes.STRING,
      },
      task_priority: {
        type: DataTypes.STRING,
      },
      repeat_every: {
        type: DataTypes.INTEGER,
      },
      task_cycles: {
        type: DataTypes.INTEGER,
      },
      task: {
        type: DataTypes.STRING,
      },
      dependent_task: {
        type: DataTypes.BOOLEAN,
      },
      hours: {
        type: DataTypes.INTEGER,
      },
      mins: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.INTEGER,
        required: true,
      },
    },
    {
      timestamps: false,
      tableName: "task",
    }
  );
  // Task.sync();
  return Task;
};
