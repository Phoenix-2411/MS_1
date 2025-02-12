'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`
        CREATE INDEX IF NOT EXISTS regulatedentityitem_clientcode_idx ON regulatedentityservice."regulatedEntityItem" USING btree 
        ("clientCode", "regulatedEntityInspectionTypeId", "keyName", "keyValue", deleted, "updatedAt");
      `)
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`DROP INDEX regulatedentityservice.regulatedentityitem_clientcode_idx`)
    ]);
  }
};


