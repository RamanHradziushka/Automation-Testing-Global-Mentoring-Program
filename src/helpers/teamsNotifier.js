const axios = require('axios');
require('dotenv').config();

class TeamsNotifier {
	constructor() {
		this.api = axios.create({
			baseURL: process.env.TEAMS_WEBHOOK,
			timeout: 1000,
			headers: {'Content-Type': 'application/json'},
		});
	}

	async sendMessageToTeams(message, color = '000000') {
		try {
			await this.api.post('', {
				'@type': 'MessageCard',
				'@content': 'http://schema.org/extensions',
				themeColor: color,
				summary: 'Teams Integration',
				sections: [{activityTitle: message}],
			});
		} catch (error) {
			return error.response ? error.response : error;
		}
	}
}

module.exports = new TeamsNotifier();
