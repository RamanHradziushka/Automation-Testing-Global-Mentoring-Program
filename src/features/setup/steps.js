const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
const LoginPage = require('../../pageobjects/loginPage');
const SidebarComponent = require('../../pageobjects/sidebarComponent');
const DashboardsPage = require('../../pageobjects/dashboardsPage');
const EditDashboardComponent = require('../../pageobjects/editDashboardComponent');
const AddNewWidgetComponent = require('../../pageobjects/addNewWidgetComponent');
const {testData} = require('../../data/testData');

Given('I open login page', async function () {
	await LoginPage.open();
});

Given('I log in with the ADMINUSERNAME and ADMINPASSWORD credentials', async function () {
	await LoginPage.login(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
});

Given('I open the project {string}', async function (projectName) {
	await SidebarComponent.openProject(projectName);
});

Given('I open dashboards page', async function () {
	await SidebarComponent.openDashboards();
});

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

When('I fill in the description with {string}', async function (description) {
	await EditDashboardComponent.fillDescription(description);
});

When('I click the update button', async function () {
	await EditDashboardComponent.clickUpdateButton();
});

Then('I should see the description {string}', async function (expectedDescription) {
	const actualDescription = await EditDashboardComponent.getDescription();
	expect(actualDescription).to.equal(expectedDescription);
});

When('I click the add new widget button', async function () {
	await DashboardsPage.clickAddNewWidgetButton();
});

Then('I should see the following widget types:', async function (types) {
	const expectedWidgetTypes = types.raw().map((array) => array[0]);
	const actualWidgetTypes = await AddNewWidgetComponent.getWidgetTypes();

	expect(actualWidgetTypes, `${JSON.stringify(actualWidgetTypes)} is not equal ${JSON.stringify(expectedWidgetTypes)}`).to.deep.equal(expectedWidgetTypes);
});
