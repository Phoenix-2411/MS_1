"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "reitDetails",
          schema: "regulatedentityservice"
        },
        "assignedToId",
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
          tableName: "reitDetails",
          schema: "regulatedentityservice"
        },
        "assignedToId",
        {
          type: Sequelize.UUID
        }
      )
    ]);
  }
};
