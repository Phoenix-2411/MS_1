'use strict';

const { UUIDV4 } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contacts", {
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
      contactType: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING,
      },
      zip: {
        type: Sequelize.STRING
      },
      default: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
      tableName: 'contacts',
      schema: 'regulatedentityservice'
    });
  }
};
