const { StatType } = require('../models');

module.exports = {
  async create(req, res) {
    const stats = [];
    for (const stat of req.body.stats) {
      await StatType.create({
        name: stat,
      })
        .then((s) => stats.push(s))
        .catch((err) => console.log(err));
    }
    res.status(201).send(stats);
  },
  get(req, res) {
    StatType.findAll()
      .then((stat) => res.status(201).send(stat))
      .catch((err) => res.status(400).send(err));
  },
  getById(req, res) {
    StatType.findByPk(req.params.statId)
      .then((stat) => res.status(201).send(stat))
      .catch((err) => res.status(400).send(err));
  },
};
