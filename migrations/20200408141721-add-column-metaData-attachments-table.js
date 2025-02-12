"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "attachments",
          schema: "regulatedentityservice"
        },
        "metaData",
        {
          allowNull: true,
          type: Sequelize.JSONB
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        {
          tableName: "regulatedEntityInspectionType",
          schema: "attachements"
        },
        "metaData",
        {
          allowNull: true,
          type: Sequelize.JSONB,
        }
      )
    ]);
  }
};
