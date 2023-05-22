const expect = require('chai').expect;
const {testData} = require('../../../data/testData');
const addNewWidgetComponent = require('../../pageobjects/addNewWidgetComponent');
const dashboardsPage = require('../../pageobjects/dashboardsPage');
const LoginPage = require('../../pageobjects/loginPage');
const sidebarComponent = require('../../pageobjects/sidebarComponent');

describe('Check new widget types', () => {
	before(async function () {
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

		expect(widgetTypes, `${JSON.stringify(widgetTypes)} is not equal ${JSON.stringify(testData.newWidgetTypes)}`).to.deep.equal(testData.newWidgetTypes);
	});
});
