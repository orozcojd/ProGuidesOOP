'use strict';
module.exports = (sequelize, DataTypes) => {
	const Item = sequelize.define('Item', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		}
	}, {});
	Item.associate = function(models) {
		Item.belongsTo(models.SlotType, {
			foreignKey: 'SlotTypeID',
			onDelete: 'CASCADE'
		});
		Item.hasMany(models.ItemStat, {
			foreignKey: 'ItemID',
			// as: 'items'
		});
		Item.hasMany(models.CharacterSlot, {
			foreignKey: 'ItemID',
			// as: 'items'
		});
	};
	return Item;
};