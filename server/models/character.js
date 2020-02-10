
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});
  Character.associate = function (models) {
    Character.hasMany(models.CharacterSlot, {
      foreignKey: {
        CharacterID: 'id',
      },
      // as: 'characters'
    });
    Character.hasMany(models.CharacterEvents, {
      foreignKey: {
        CharacterID: 'id',
      },
      // as: 'characters'
    });
  };
  return Character;
};
