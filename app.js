const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

let models = require('./models');
models.sequelize.sync()
	.then(() => {
		console.log('db sync successful.');
	})
	.catch(err => console.log(err, 'Something went wrong syncing.'));

app.listen(8081);

