const Stat = require('../models').StatType;

module.exports = {
	async create(req, res) {
		const stats = [];
		for(let stat of req.body.stats) {
			await Stat.create({
				name: stat
			})
				.then(stat => stats.push(stat))
				.catch(err => console.log(err));
		}
		res.status(201).send(stats);
	},
	get(req, res) {
		Stat.findAll()
		.then(stat => res.status(201).send(stat))
		.catch(err => res.status(400).send(err));
	},
	getById(req, res) {
		Stat.findByPk(req.params.statId)
			.then(stat => res.status(201).send(stat))
			.catch(err => res.status(400).send(err));
	}
};
