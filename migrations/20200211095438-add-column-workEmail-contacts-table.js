"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "contacts",
          schema: "regulatedentityservice"
        },
        "workEmail",
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
          tableName: "contacts",
          schema: "regulatedentityservice"
        },
        "workEmail",
        {
          type: Sequelize.STRING
        }
      )
    ]);
  }
};
