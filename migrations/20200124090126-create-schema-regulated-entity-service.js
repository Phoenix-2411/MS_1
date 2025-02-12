'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema('regulatedentityservice');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropSchema('regulatedentityservice');
  }
};