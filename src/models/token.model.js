const { tokenTypes } = require('../config/tokens');
const Sequelize = require('sequelize');
const { TOKEN, USER } = require('../constants/tables');

module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define(
    TOKEN,
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      token: {
        type: DataTypes.STRING,
        required: true,
        index: true,
      },
      // userId: {
      //   type: DataTypes.STRING,
      //   references: {
      //     model: USER,
      //     key: 'id',
      //   },
      //   required: true,
      // },
      userId : {
        type: DataTypes.INTEGER,
        required: true,
        index: true
      },
      type: {
        type: DataTypes.ENUM,
        values: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
        required: true,
      },
      expires: {
        type: DataTypes.DATE,
        required: true,
      },
      blacklisted: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      // createdAt: {
      //   type: Sequelize.DATE, 
      //   defaultValue: Sequelize.NOW,
      //   allowNull: false
      // },
      // updatedAt: {
      //   type: Sequelize.DATE, 
      //   defaultValue: Sequelize.NOW,
      //   allowNull: false
      // }
    },
    {
      // timestamps: false,
      tableName: 'token',
      timestamps: true,
      // updatedAt: 'updatedAt',
      // createdAt: 'createdAt'
      },
  );
  Token.sync()
  return Token;
};
