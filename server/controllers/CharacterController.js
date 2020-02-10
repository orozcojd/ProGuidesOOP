const { Item } = require('../models');
const { SlotType } = require('../models');
const { Character } = require('../models');
const { CharacterSlot } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { name } = req.body;

      // get slot id
      const character = await Character.create({ name });

      const characterSlots = [];
      const slotTypes = await SlotType.findAll();
      for (const slotType of slotTypes) {
        for (let i = 0; i < slotType.slotNums; i++) {
          const cSlot = await CharacterSlot.create({
            CharacterID: character.id,
            SlotTypeID: slotType.id,
          });
          characterSlots.push(cSlot);
        }
      }
      res.status(201).send({
        character,
        characterSlots,
      });
    } catch (err) {
      res.status(401).send(err);
    }
  },
  getAll(req, res) {
    return Character.findAll().then((c) => res.status(201).send(c));
  },
  getById(req, res) {
    return Character.findByPk(req.params.characterId)
      .then((c) => res.status(201).send(c))
      .catch((err) => res.status(400).send(err));
  },
};
