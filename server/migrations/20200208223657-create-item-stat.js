
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ItemStats', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    StatTypeID: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'StatTypes',
        key: 'id',
        as: 'StatTypeID',
      },
    },
    ItemID: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Items',
        key: 'id',
        as: 'ItemID',
      },
    },
    value: {
      type: Sequelize.INTEGER,
    },
    baseAttr: {
      type: Sequelize.BOOLEAN,
    },
    timeActive: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ItemStats'),
};
