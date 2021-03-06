const { SlotType } = require('../models');

module.exports = {
  async create(req, res) {
    const slotTypes = [];
    for (const slot of req.body.slotTypes) {
      await SlotType.create({
        name: slot.name,
        slotNums: slot.slotNums,
      })
        .then((s) => slotTypes.push(s))
        .catch((err) => res.status(400).send(err));
    }
    res.status(201).send(slotTypes);
  },
  get(req, res) {
    return SlotType.findAll()
      .then((s) => res.status(201).send(s))
      .catch((err) => res.status(400).send(err));
  },
  getById(req, res) {
    return SlotType.findByPk(req.params.slotId)
      .then((slot) => res.status(201).send(slot))
      .catch((err) => res.status(400).send(err));
  },
};
