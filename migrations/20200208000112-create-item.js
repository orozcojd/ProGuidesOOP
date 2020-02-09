'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Items', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
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
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
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
		return queryInterface.dropTable('Items');
	}
};