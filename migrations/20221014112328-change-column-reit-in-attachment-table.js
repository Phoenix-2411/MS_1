'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn({
      tableName: 'attachments',
      schema: 'regulatedentityservice'
    }, 'regulatedEntityInspectionTypeId', {
      type: Sequelize.UUID,
      allownull: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn({
      tableName: 'attachments',
      schema: 'regulatedentityservice'
    }, 'regulatedEntityInspectionTypeId', {
      type: Sequelize.UUID,
      allownull: false
    });
  }
};