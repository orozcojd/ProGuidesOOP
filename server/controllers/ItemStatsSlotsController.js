const Item = require('../models').Item;
const SlotType = require('../models').SlotType;
const ItemStat = require('../models').ItemStat;
const StatType = require('../models').StatType;


module.exports = {
	async getFullItems(req, res) {
    try {
      const slotTypes = await SlotType.findAll({raw: true});
      const items = await ItemStat.findAll({
        // raw: true,
        include:[{
          model: Item,
          required: true
        },
        {
          model: StatType,
          required: true
        }]
      });
      const payload = items.map(v => ({
        itemStat: v,
        slotType: slotTypes.find(slot => slot.id === v.Item.SlotTypeID)
      }))
      res.status(201).send(payload)
    } catch (err) {
      console.log(err)
      res.status(401).send(err)
    }
	}
};