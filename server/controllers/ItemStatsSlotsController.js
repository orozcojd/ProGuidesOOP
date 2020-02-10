const {
  Item,
  SlotType,
  ItemStat,
  StatType,
} = require('../models');

module.exports = {
  async getFullItems(req, res) {
    try {
      const slotTypes = await SlotType.findAll({ raw: true });
      const items = await ItemStat.findAll({
        include: [{
          model: Item,
          required: true,
        },
        {
          model: StatType,
          required: true,
        }],
      });
      const payload = items.map((v) => ({
        itemStat: v,
        slotType: slotTypes.find((slot) => slot.id === v.Item.SlotTypeID),
      }));
      res.status(201).send(payload);
    } catch (err) {
      // console.log(err);
      res.status(401).send(err);
    }
  },
};
