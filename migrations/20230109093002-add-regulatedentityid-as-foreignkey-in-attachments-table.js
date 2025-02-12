'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`ALTER TABLE regulatedentityservice.attachments 
      ADD CONSTRAINT "attachments_regulatedEntityId_fkey"
      FOREIGN KEY ("regulatedEntityId") 
      REFERENCES regulatedentityservice."regulatedEntity"(id);      
      `)
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`ALTER TABLE regulatedentityservice.attachments 
      DROP CONSTRAINT "attachments_regulatedEntityId_fkey";`)
    ])
  }
};
