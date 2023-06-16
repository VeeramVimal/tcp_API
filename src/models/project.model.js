const { PROJECT,EMPLOYEE,CLIENTDETAILS } = require('../constants/tables')
const Sequelize = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define(
        PROJECT,
        {
            project_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
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
            project_name:{
                type:DataTypes.STRING,
                required:true
            },
            start_date: {
                type: DataTypes.DATE,
                required: true,
            },
            deadline: {
                type: DataTypes.DATE,
                required: true,
            },
            project_category: {
                type: DataTypes.INTEGER,
            },
            department: {
                type: DataTypes.INTEGER,
            },
            client_id:{
                type:DataTypes.INTEGER,
                references: {
                    model: CLIENTDETAILS,
                    key: 'client_id'
                },
                required:true
            },
            add_file: {
                type: DataTypes.STRING,
            },
            project_summary: {
                type: DataTypes.STRING,
            }, 
            notes: {
                type: DataTypes.STRING,
            }, 
            create_public_project: {
                type: DataTypes.BOOLEAN,
            }, 
            currency: {
                type: DataTypes.INTEGER,
            }, 
            project_budget: {
                type: DataTypes.INTEGER,
            }, 
            estimated_hours: {
                type: DataTypes.INTEGER,
            },
            module: {
                type: DataTypes.INTEGER,
            },
            status: {
                type: DataTypes.INTEGER,
                required:true
            },
        },
        {
            timestamps: true,
            tableName: "project",
        }
    );
    // Project.sync()
    return Project
}