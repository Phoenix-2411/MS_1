'use strict';

const { UUIDV4 } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("riskMetric", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false
      },
      regulatedEntityInspectionTypeId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "regulatedEntityInspectionType",
          key: "id"
        }
      },
      category: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.FLOAT
      },
      createdBy: {
        type: Sequelize.UUID
      },
      updatedBy: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    }, {
      schema: 'regulatedentityservice'
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: 'riskMetric',
      schema: 'regulatedentityservice'
    });
  }
};
