const Item = require('../models').Item;
const SlotType = require('../models').SlotType;
const ItemStat = require('../models').ItemStat
const StatType = require('../models').StatType
module.exports = {
	async create(req, res) {
		try {

		const { name, slotType, stats } = req.body;
		
		// get slot id
		const slot = await SlotType.findOne({
			where: { name: slotType.name, id: slotType.id }
		})
		// foreign key constraing check
		if(!slot) return res.status(401).send({
			message: `Oops! SlotTypes resource ${slotType} does not exist.`
		})

		const item = await Item.create({
			name,
			SlotTypeID: slot.id
		})
		const itemStats = []
		for(const stat of stats) {
			const statType = await StatType.findOne({
				id: stat.id,
				name: stat.name
			})
			// foreign key constraint
			if(!statType) return res.status(401).send({
				message: `Oops! StatType resource ${stat.name} does not exist.`
			})

			const itemStat = await ItemStat.create({
				ItemID: item.id,
				StatTypeID: statType.id,
				value: stat.value,
				baseAttr: stat.baseAttr
			})
			itemStats.push(itemStat)
		}
		res.status(201).send({
			item,
			itemStats
		})
		
	} catch(err) {
		res.status(401).send(err)
	}
		
	},
	getAll(req, res) {
		return Item.findAll().then(item => res.status(201).send(item));
	},
	getById(req, res) {
		return Item.findByPk(req.params.itemId)
			.then(slot => res.status(201).send(slot))
			.catch(err => res.status(400).send(err));
	}
};
