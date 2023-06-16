const Sequelize = require('sequelize');
const { NOTICEBOARD, CLIENTDETAILS, EMPLOYEE } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
  const noticeBoard = sequelize.define(
    NOTICEBOARD,
    {
       noticeboard_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      to:{
        type: DataTypes.STRING,
        required: true,
      },
      assigned_to: {
        type: DataTypes.STRING,
        required: true,
      },
      notice_heading: {
        type: DataTypes.STRING,
        required: true,
      },
      department: {
        type: DataTypes.STRING,
        required: true,      
      },
      notice_details: {
        type: DataTypes.STRING,
        required: true,
      }
    },
    {  
          timestamps: false,
      tableName: 'noticeboard',
    }
  );
  noticeBoard.sync();
  return noticeBoard;
};
