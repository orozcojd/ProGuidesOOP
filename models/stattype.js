'use strict';
module.exports = (sequelize, DataTypes) => {
	const StatType = sequelize.define('StatType', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		}
	}, {});
	StatType.associate = function(models) {
		StatType.hasMany(models.ItemStat, {
			foreignKey: 'StatTypeID',
			as: 'stattypes'
		});
	};
	return StatType;
};