'use strict';
module.exports = (sequelize, DataTypes) => {
	const SlotType = sequelize.define('SlotType', {
		name:{
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		}
	}, {});
	SlotType.associate = function(models) {
		// associations can be defined here
		SlotType.hasMany(models.Item, {
			foreignKey: 'SlotTypeID',
			// as: 'slottypes'
		});
		SlotType.hasMany(models.CharacterSlot, {
			foreignKey: 'SlotTypeID',
			// as: 'slottypes'
		});
	};
	return SlotType;
};