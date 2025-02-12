"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn({
        tableName: 'reitDetails',
        schema: 'regulatedentityservice'
      },
      'startDate',
      'assignedToStartDate'
      ),
      queryInterface.renameColumn({
        tableName: 'reitDetails',
        schema: 'regulatedentityservice'
      },
      'teamId',
      'assignedToTeamId'
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn({
        tableName: 'reitDetails',
        schema: 'regulatedentityservice'
      },
      'assignedToStartDate',
      'startDate'
      ),
      queryInterface.renameColumn({
        tableName: 'reitDetails',
        schema: 'regulatedentityservice'
      },
      'assignedToTeamId',
      'teamId'
      )
    ])
  }
};
