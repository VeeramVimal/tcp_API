const Sequelize = require('sequelize');
const {SKILL } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    SKILL,
    {
      skill_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
      },
     skill_name: {
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
      tableName: "skills"
    }
  );
  Skill.sync();
  return Skill;
};
