'use strict';
module.exports = (sequelize, DataTypes) => {
	const CharacterSlot = sequelize.define('CharacterSlot', {
		active: DataTypes.BOOLEAN
	}, {});
	CharacterSlot.associate = function(models) {
		CharacterSlot.belongsTo(models.Character, {
			foreignKey: 'CharacterID',
			onDelete: 'CASCADE'
		});
		CharacterSlot.belongsTo(models.Item, {
			foreignKey: 'ItemID',
			onDelete: 'CASCADE'
		});
		CharacterSlot.belongsTo(models.SlotType, {
			foreignKey: 'SlotTypeID',
			onDelete: 'CASCADE'
		});
	};
	return CharacterSlot;
};