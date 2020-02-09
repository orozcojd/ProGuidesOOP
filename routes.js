//routes are used for declaring routes to all the controllers

const ItemController = require('./controllers/ItemController');
const StatController = require('./controllers/StatController');

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'API endpoint succesfully hit!'
	}));
	app.post('/api/stat',
		StatController.create);
	app.get('/api/stat/:statId',
		StatController.getById);
};