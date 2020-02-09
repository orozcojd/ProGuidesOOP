'use strict';
module.exports = (sequelize, DataTypes) => {
	const ItemStat = sequelize.define('ItemStat', {
		value: DataTypes.INTEGER,
		baseAttr: DataTypes.BOOLEAN,
		timeActive: DataTypes.INTEGER
	}, {});

	ItemStat.associate = function(models) {
		ItemStat.belongsTo(models.Item, {
			foreignKey: 'ItemID',
			onDelete: 'CASCADE'
		});
		ItemStat.belongsTo(models.StatType, {
			foreignKey: 'StatTypeID',
			onDelete: 'CASCADE'
		});
	};
	return ItemStat;
};