const { tokenTypes } = require('../../tokens');

module.exports = {
    up: async (queryInterface, Sequelize) =>
      queryInterface.createTable('token', {
        id: {
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
          },
        token: {
            type: Sequelize.STRING,
            required: true,
            index: true,
          },
          user: {
            type: Sequelize.STRING,
            required: true,
          },
          type: {
            type: Sequelize.ENUM,
            values: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
            required: true,
          },
          expires: {
            type: Sequelize.DATE,
            required: true,
          },
          blacklisted: {
            type: Sequelize.BOOLEAN,
            default: false,
          }
      }),
    down: async (queryInterface, Sequelize) => queryInterface.dropTable('token'),
  };
  