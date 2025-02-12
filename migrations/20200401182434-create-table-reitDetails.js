'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('reitDetails', {
      regulatedEntityInspectionTypeId: {
        type: Sequelize.UUID,
        references:{schema:"regulatedentityservice", model:"regulatedEntityInspectionType",key:"id"},
		allowNull: false,
		primaryKey: true
      },
      lastInspectionId: {
				type: Sequelize.UUID
			},
			lastInspectionDate: {
				type: Sequelize.DATE
			},
			assignedToName: {
				type: Sequelize.STRING
      },
      startDate: {
				type: Sequelize.DATE
      },
      teamId: {
        type: Sequelize.UUID
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
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
			}
		}, {
			freezeTableName: true,
			timestamps: true,
			schema: 'regulatedentityservice'
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('reitDetails');
	}
};
