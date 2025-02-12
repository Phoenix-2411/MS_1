'use strict';
const { v4: UUIDV4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('regulatedEntityInspectionType', {
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
      regulatedEntityId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'regulatedEntity', key: 'id' }
      },
      inspectionTypeCode: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.TEXT
      },
      defaultResponsibleContact: {
        type: Sequelize.UUID
      },
      defaultComplianceContact: {
        type: Sequelize.UUID
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
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
      mailingAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      attributeMap: {
        type: Sequelize.JSONB
      },
      clientMetaData: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      tableName: 'regulatedEntityInspectionType',
      schema: 'regulatedentityservice'
    });
  }
};