const TestConfig = require('../../utils/testconfig');

module.exports = class Page {
	static async open(page, path = '') {
		return await page.goto(`${TestConfig.platform}${path}`);
	}
};
