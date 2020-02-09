const Item = require('../models').Item;
const SlotType = require('../models').SlotType;
const Character = require('../models').Character
const CharacterSlot = require('../models').CharacterSlot

module.exports = {
	async create(req, res) {
		try {

		const { name } = req.body;
		
		// get slot id
		const character = await Character.create({
      name
    })


    const characterSlots = []
    const slotTypes = await SlotType.findAll()
		for(const slotType of slotTypes) {
      for(let i = 0; i < slotType.slotNums; i++) {
        const cSlot = await CharacterSlot.create({
          charID: character.id,
          SlotTypeID: slotType.id
        })
        characterSlots.push(cSlot)
      }

		}
		res.status(201).send({
			character,
			characterSlots
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
