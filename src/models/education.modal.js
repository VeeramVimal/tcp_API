const Sequelize = require('sequelize')
const { EDUCATION,USER } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define(
        EDUCATION,
        {
            education_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            user_id:{
                type: DataTypes.INTEGER,
                references:{
                    model: USER,
                    key: 'id'
                },
                allowNull: true,
                required: true
            },
            education_title: {
                type: DataTypes.STRING,
                required: true,
            },
            education_school: {
                type: DataTypes.STRING,
                required: true,
            },
            education_timeperiod: {
                type: DataTypes.STRING,
                required: true,
            },
            education_description: {
                type: DataTypes.STRING,
                required: true,
            },
        },
        {
            timestamps: false,
            tableName: "education",
        }
    );
    // Education.sync()
    return Education
}