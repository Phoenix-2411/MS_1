'use strict';

const { UUIDV4 } = require("sequelize");

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('attachments', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				defaultValue: UUIDV4,
				allowNull: false
			},
			regulatedEntityInspectionTypeId: {
				type: Sequelize.UUID,
				references: { schema: "regulatedentityservice", model: "regulatedEntityInspectionType", key: "id" },
				allowNull: false
			},
			regulatedEntityItemId: {
				type: Sequelize.UUID,
				references: { schema: "regulatedentityservice", model: "regulatedEntityItem", key: "id" }
			},
			mimeType: {
				type: Sequelize.STRING
			},
			title: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.STRING
			},
			active: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
				allowNull: false
			},
			deleted: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false
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
		return queryInterface.dropTable('attachments');
	}
};
