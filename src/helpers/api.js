const testConfig = require('../utils/testconfig');
const axios = require('axios');
require('dotenv').config();

module.exports = class Api {
	constructor() {
		this.httpClient = axios.create({
			baseURL: `${testConfig.platform}api/v1/automated_testing_global_mentoring_program`,
			timeout: 1000,
			headers: {
				Authorization: `bearer ${process.env.ACCESS_TOKEN}`,
				'Content-Type': 'application/json',
			},
		});
	}

	async get(url, params = {}, headers = {}) {
		try {
			const response = await this.httpClient.get(url, {params, headers});
			return response.data;
		} catch (error) {
			return error.response ? error.response : error;
		}
	}

	async post(url, data) {
		try {
			const response = await this.httpClient.post(url, data);
			return response.data;
		} catch (error) {
			return error.response ? error.response : error;
		}
	}

	async put(url, data = {}, headers = {}) {
		try {
			const response = await this.httpClient.put(url, data, {headers});
			return response.data;
		} catch (error) {
			return error.response ? error.response : error;
		}
	}

	async delete(url, headers = {}) {
		try {
			const response = await this.httpClient.delete(url, {headers});
			return response.data;
		} catch (error) {
			return error.response ? error.response : error;
		}
	}
};
