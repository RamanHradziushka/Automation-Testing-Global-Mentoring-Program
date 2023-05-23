const {Given, When, Then} = require('@cucumber/cucumber');
const SidebarComponent = require('../pageobjects/sidebarComponent');

Given('I open the project {string}', async function (projectName) {
	await SidebarComponent.openProject(projectName);
});

Given('I open dashboards page', async function () {
	await SidebarComponent.openDashboards();
});
