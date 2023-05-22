const {Before, BeforeAll, After} = require('@cucumber/cucumber');
const Page = require('../../pageobjects/page');
const LoginPage = require('../../pageobjects/loginPage');
const sidebarComponent = require('../../pageobjects/sidebarComponent');
const dashboardsPage = require('../../pageobjects/dashboardsPage');

After(async function (scenario) {
	if (scenario.result.status === 'FAILED') {
		const screenshotPath = `./screenshots/${scenario.pickle.name.replace(/ /g, '_')}_${Date.now()}.png`;
		await Page.saveScreenshot(`${screenshotPath}`);
	}
});

let hasRunOnce = false;
Before({tags: '@loginAndSelectProject'}, async function () {
	if (!hasRunOnce) {
		await LoginPage.open();
		await LoginPage.login(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
		await sidebarComponent.openProject('automated_testing_global_mentoring_program');

		hasRunOnce = true;
	}
});
