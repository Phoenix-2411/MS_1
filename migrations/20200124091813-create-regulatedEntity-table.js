'use strict';

const { UUIDV4 } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("regulatedEntity", {
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
      entityType: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.TEXT
      },
      zip: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      county: {
        type: Sequelize.STRING
      },
      municipality: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      clientMetaData: {
        type: Sequelize.JSONB
      },
      owners: {
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
      tableName: 'regulatedEntity',
      schema: 'regulatedentityservice'
    });
  }
};
