'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn({
      tableName: 'attachments',
      schema: 'regulatedentityservice'
    }, 'description', {
        type: Sequelize.STRING(5000)
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn({
      tableName: 'attachments',
      schema: 'regulatedentityservice'
    }, 'description', {
        type: Sequelize.STRING(255)
    });
  }
};