const {After} = require('@cucumber/cucumber');
const Page = require('../../src/pageobjects/page');

After(async function (scenario) {
	if (scenario.result.status === 'FAILED') {
		const screenshotPath = `./screenshots/${scenario.pickle.name.replace(/ /g, '_')}_${Date.now()}.png`;
		await Page.saveScreenshot(`${screenshotPath}`);
	}
});
