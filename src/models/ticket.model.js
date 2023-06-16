const Sequelize = require('sequelize')
const { TICKET, EMPLOYEE } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    TICKET,
    {
      ticket_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
      },
      ticket_description: {
        type: DataTypes.STRING,
        required: true,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        reference:{
            model: EMPLOYEE,
            key:'employee_id'
        },
        required: true,
    },
      ticket_subject: {
        type: DataTypes.STRING,
        required: true,
      },
      
      requested_on: {
        type: DataTypes.DATE,
        required: true,
      },
     
      ticket_priority: {
        type: DataTypes.STRING,
      },
      ticket_type: {
        type: DataTypes.STRING,
      },
      
      upload_file: {
        type: DataTypes.STRING
      },
      ticket_tags: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.INTEGER,
        required: true
      }
    },
    {
      timestamps: false,
      tableName: "ticket",
    }
  );
  // Ticket.sync()
  return Ticket
}