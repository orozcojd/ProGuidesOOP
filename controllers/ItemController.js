const Item = require('../models').Item;

module.exports = {
	create(req, res) {
		return Item.create({
			type: req.body.type,
			slots: req.body.slots
		})
			.then(item =>  res.status(201).send(item))
			.catch(err => res.status(400).send(err));
	},
	getAll(req, res) {
		return Item.findAll().then(item => res.status(201).send(item));
	},
	get(req, res) {
		const query = {
			// id: req.body.id ? req.body.id : 
		};
		return Item.find({
			where: {
        
			}
		});
	}
};
/*
where: {
        '$Authors.lastName$': 'Testerson'
    },
    include: [
        {model: Author, as: Author.tableName}
    ]
*/