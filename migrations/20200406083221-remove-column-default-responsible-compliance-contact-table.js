"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        {
          tableName: "regulatedEntityInspectionType",
          schema: "regulatedentityservice"
        },
        "defaultResponsibleContact",
        {
          type: Sequelize.UUID
        }
      ),
      queryInterface.removeColumn(
        {
          tableName: "regulatedEntityInspectionType",
          schema: "regulatedentityservice"
        },
        "defaultComplianceContact",
        {
          type: Sequelize.UUID
        }
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        {
          tableName: "regulatedEntityInspectionType",
          schema: "regulatedentityservice"
        },
        "defaultResponsibleContact",
        {
          type: Sequelize.UUID
        }
      ),
      queryInterface.addColumn(
        {
          tableName: "regulatedEntityInspectionType",
          schema: "regulatedentityservice"
        },
        "defaultComplianceContact",
        {
          type: Sequelize.UUID
        }
      )
    ]);
  }
};
