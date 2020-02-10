'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('CharacterSlots', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			CharacterID: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Characters',
					key: 'id',
					as: 'CharacterID'
				}
			},
			ItemID: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Items',
					key: 'id',
					as: 'ItemID'
				}
			},
			SlotTypeID: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'SlotTypes',
					key: 'id',
					as: 'SlotTypeID'
				}
			},
			active: {
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('CharacterSlots');
	}
};