const { ENQUIRY } = require('../constants')

module.exports = (sequelize, DataTypes) => {
    const Enquiry = sequelize.define(
        ENQUIRY,
        {
            enquiry_id:{
                type:DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true
            },
            enquiry_name:{
                type:DataTypes.STRING,
                required: true
            },
            enquiry_email:{
                type:DataTypes.STRING,
                required: true
            },
            enquiry_message:{
                type:DataTypes.STRING,
                required: true
            },
            enquiry_status:{
                type:DataTypes.STRING,
                required: true
            }
        },
        {
            timestamps:true,
            tablename:"enquiry"
        }
    )
    // Enquiry.sync()
    return Enquiry
}