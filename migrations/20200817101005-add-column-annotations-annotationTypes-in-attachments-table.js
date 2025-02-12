"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "attachments",
          schema: "regulatedentityservice"
        },
        "annotations",
        {
          type: Sequelize.JSONB,
          allowNull: false,
          defaultValue: []
        }
      ),
      queryInterface.addColumn(
        {
          tableName: "attachments",
          schema: "regulatedentityservice"
        },
        "annotationTypes",
        {
          type: Sequelize.JSONB,
          allowNull: false,
          defaultValue: []
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
        "annotations"
      ),
      queryInterface.removeColumn(
        {
          tableName: "attachments",
          schema: "regulatedentityservice"
        },
        "annotationTypes"
      )
    ]);
  }
};
