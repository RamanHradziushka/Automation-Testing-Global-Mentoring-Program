const {testData} = require('../../data/testData');
const addNewWidgetComponent = require('../../src/pageobjects/addNewWidgetComponent');
const dashboardsPage = require('../../src/pageobjects/dashboardsPage');
const LoginPage = require('../../src/pageobjects/loginPage');
const sidebarComponent = require('../../src/pageobjects/sidebarComponent');

describe('Check new widget types', () => {
	beforeAll(async function () {
		await LoginPage.open();
		await LoginPage.login(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
	});

	it('Step 1 - Select dashboard', async () => {
		await sidebarComponent.openProject('automated_testing_global_mentoring_program');
		await dashboardsPage.selectDashboard('DEMO DASHBOARD');
	});

	it('Step 2 - Click add new widget button', async () => {
		await dashboardsPage.clickAddNewWidgetButton();
		let widgetTypes = await addNewWidgetComponent.getWidgetTypes();

		expect(widgetTypes).toEqual(testData.newWidgetTypes, `${JSON.stringify(widgetTypes)} is not equal ${JSON.stringify(testData.newWidgetTypes)}`);
	});
});
