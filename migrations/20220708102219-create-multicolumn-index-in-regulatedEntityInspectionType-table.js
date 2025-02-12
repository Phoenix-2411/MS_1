'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`CREATE INDEX IF NOT EXISTS regulatedentityinspectiontype_latlng_idx ON regulatedentityservice."regulatedEntityInspectionType" 
      USING btree ("clientCode", "inspectionTypeCode", "latitude", "longitude");
      `)
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`DROP INDEX regulatedentityservice.regulatedentityinspectiontype_latlng_idx`)
    ]);
  }
};
