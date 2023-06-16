const Sequelize = require('sequelize');
const { APPLICANTDETAILS,USER } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
  const Applicantdetails = sequelize.define(
    APPLICANTDETAILS,
    {
      applicantdetails_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        // references:{
        //   model: USER,
        //   key: 'id'
        // },
        required: true
      },
      applicant_name:{
        type: DataTypes.STRING,
        required: true
      },
      applicant_title:{
        type: DataTypes.STRING,
        allowNull: true
      },
      applicant_location: {
        type: DataTypes.STRING,
        required: true
      },
      applicant_phone: {
        type: DataTypes.STRING,
        required: true
      },
      applicant_about:{
        type: DataTypes.STRING,
        allowNull: true
      },
      applicant_image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      applicant_cv: {
        type: DataTypes.STRING,
        required: true
      },
      applicant_skills: {
        type: DataTypes.STRING,
        allowNull:true
      }
    },
    {
      timestamps: false,
      tableName: "applicant_details"
    }
  );
  // Applicantdetails.sync();
  return Applicantdetails;
};
