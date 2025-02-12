'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.createSchema('regulatedentityservice')
      ]);
    },
  
    down: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.dropSchema('regulatedentityservice')
      ]);  }
  };
