const axios = require('axios');

module.exports = {
  api(options = {}) {
		return axios.create({
			...options,
			baseURL: 'http://localhost:8081/api',
			timeout: 60000,
		});
	},
}