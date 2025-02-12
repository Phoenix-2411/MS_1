"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "regulatedEntityInspectionType",
          schema: "regulatedentityservice"
        },
        "country",
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        {
          tableName: "regulatedEntityInspectionType",
          schema: "regulatedentityservice"
        },
        "zip",
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
          tableName: "regulatedEntityInspectionType",
          schema: "regulatedentityservice"
        },
        "country",
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.removeColumn(
        {
          tableName: "regulatedEntityInspectionType",
          schema: "regulatedentityservice"
        },
        "zip",
        {
          type: Sequelize.STRING
        }
      )
    ]);
  }
};
