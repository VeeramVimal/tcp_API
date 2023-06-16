const { NOTICEBOARDORG, CLIENTDETAILS, NOTICEBOARD, EMPLOYEE } = require('../constants/tables')

module.exports = (sequelize, DataTypes) => {
    const Noticeboardorg = sequelize.define(
        NOTICEBOARDORG,
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: true,
                primaryKey: true,
            },
            noticeboard_id: {
                type: DataTypes.INTEGER,
                required: true,
                reference:{
                    model: NOTICEBOARD,
                    key:'noticeboard_id'
                  }
            },
            client_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                reference:{
                    model: CLIENTDETAILS,
                    key:'client_id'
                  }
            },
            employee_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                reference:{
                    model: EMPLOYEE,
                    key:"employee_id"
                  }
            }
        },
        {
            timestamps: false,
            tableName: "noticeboard_org",
        }
    );
    // Noticeboardorg.sync()
    return Noticeboardorg
}