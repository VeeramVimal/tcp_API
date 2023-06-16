const { roles } = require('../../roles');

module.exports = {
    up: async (queryInterface, Sequelize) =>
        queryInterface.createTable('user', {
            id: {
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            name: {
                type: Sequelize.STRING,
                required: true,
            },
            email: {
                type: Sequelize.STRING,
                required: true,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                required: true,
            },
            role: {
                type: Sequelize.ENUM,
                values: roles,
                default: 'candidate',
            },
            isEmailVerified: {
                type: Sequelize.BOOLEAN,
                default: false,
            }
        }
        ),
    down: async (queryInterface, Sequelize) => queryInterface.dropTable('user'),
};
