'use strict';

const { UUIDV4 } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("regulatedEntityItem", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false
      },
      clientCode: {
        type: Sequelize.STRING,
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
      regulatedEntityId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "regulatedEntity",
          key: "id"
        }
      },
      keyName: {
        type: Sequelize.STRING
      },
      keyValue: {
        type: Sequelize.STRING
      },
      attributeMap: {
        type: Sequelize.JSONB
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: 'regulatedEntityItem',
      schema: 'regulatedentityservice'
    });
  }
};
