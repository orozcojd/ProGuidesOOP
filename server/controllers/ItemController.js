const {
  Item,
  SlotType,
  ItemStat,
  StatType,
} = require('../models');


module.exports = {
  async create(req, res) {
    try {
      const { name, slotType, stats } = req.body;

      // get slot id
      const slot = await SlotType.findOne({
        where: { name: slotType.name, id: slotType.id },
      });
      // foreign key constraing check
      if (!slot) {
        return res.status(401).send({
          message: `Oops! SlotTypes resource ${slotType} does not exist.`,
        });
      }

      const item = await Item.create({
        name,
        SlotTypeID: slot.id,
      });
      const itemStats = [];

      for (const stat of stats) {
        const statType = await StatType.findByPk(stat.id);
        // foreign key constraint
        if (!statType) {
          return res.status(401).send({
            message: `Oops! StatType resource ${stat.name} does not exist.`,
          });
        }

        const itemStat = await ItemStat.create({
          ItemID: item.id,
          StatTypeID: statType.id,
          value: stat.value,
          baseAttr: stat.baseAttr,
        });
        itemStats.push(itemStat);
      }
      res.status(201).send({
        item,
        itemStats,
      });
    } catch (err) {
      res.status(401).send(err);
    }
  },
  getAll(req, res) {
    return Item.findAll().then((item) => res.status(201).send(item));
  },
  getById(req, res) {
    return Item.findByPk(req.params.itemId)
      .then((item) => res.status(201).send(item))
      .catch((err) => res.status(400).send(err));
  },
};
