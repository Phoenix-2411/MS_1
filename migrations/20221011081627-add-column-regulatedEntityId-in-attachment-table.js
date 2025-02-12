"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "attachments",
          schema: "regulatedentityservice"
        },
        "regulatedEntityId",
        {
          type: Sequelize.UUID
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        {
          tableName: "attachments",
          schema: "regulatedentityservice"
        },
        "regulatedEntityId",
        {
          type: Sequelize.UUID
        }
      )
    ]);
  }
};
