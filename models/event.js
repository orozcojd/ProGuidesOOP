'use strict';
module.exports = (sequelize, DataTypes) => {
	const Event = sequelize.define('Event', {
		name: DataTypes.STRING
	}, {});
	Event.associate = function(models) {
		Event.hasMany(models.CharacterEvents, {
			foreignKey: 'EventID',
			as: 'events'
		});
	};
	return Event;
};