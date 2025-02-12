"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "attachments",
          schema: "regulatedentityservice"
        },
        "contextType",
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
          tableName: "attachments",
          schema: "regulatedentityservice"
        },
        "contextType",
        {
          type: Sequelize.STRING
        }
      )
    ]);
  }
};
