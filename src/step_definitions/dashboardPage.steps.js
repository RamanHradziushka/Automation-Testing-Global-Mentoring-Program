const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
const DashboardsPage = require('../pageobjects/dashboardsPage');

When('I select the dashboard named {string}', async function (dashboardName) {
	await DashboardsPage.selectDashboard(dashboardName);
});

Then('I should see the following statistics items:', async function (statuses) {
	const expectedStatisticsItems = statuses.raw().map((array) => array[0]);
	const actualStatisticsItems = await DashboardsPage.getLaunchStatisticsItems();

	expect(actualStatisticsItems, `${JSON.stringify(actualStatisticsItems)} is not equal ${JSON.stringify(expectedStatisticsItems)}`).to.deep.equal(expectedStatisticsItems);
});

When('I click the edit dashboard button', async function () {
	await DashboardsPage.clickEditDashboardButton();
});

When('I click the add new widget button', async function () {
	await DashboardsPage.clickAddNewWidgetButton();
});
