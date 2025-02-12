"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "regulatedEntity",
          schema: "regulatedentityservice"
        },
        "externalId",
        {
          type: Sequelize.STRING
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        {
          tableName: "regulatedEntity",
          schema: "regulatedentityservice"
        },
        "externalId",
        {
          type: Sequelize.STRING
        }
      )
    ]);
  }
};
