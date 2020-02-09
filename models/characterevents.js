'use strict';
module.exports = (sequelize, DataTypes) => {
	const CharacterEvents = sequelize.define('CharacterEvents', {
		timeStamp: DataTypes.DATE
	}, {});
	CharacterEvents.associate = function(models) {
		CharacterEvents.belongsTo(models.Character, {
			foreignKey: 'CharacterID',
			onDelete: 'CASCADE'
		});
		CharacterEvents.belongsTo(models.Event, {
			foreignKey: 'EventID',
			onDelete: 'CASCADE'
		});
	};
	return CharacterEvents;
};