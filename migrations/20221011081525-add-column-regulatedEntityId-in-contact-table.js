"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "contacts",
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
          tableName: "contacts",
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
