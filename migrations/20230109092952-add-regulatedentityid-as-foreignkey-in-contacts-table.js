'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`ALTER TABLE regulatedentityservice.contacts 
      ADD CONSTRAINT "contacts_regulatedEntityId_fkey" 
      FOREIGN KEY ("regulatedEntityId") 
      REFERENCES regulatedentityservice."regulatedEntity"(id);
      `)
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(`ALTER TABLE regulatedentityservice.contacts 
      DROP CONSTRAINT "contacts_regulatedEntityId_fkey";`)
    ])
  }
};
