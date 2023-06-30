const expect = require('chai').expect;
const {testData} = require('../../data/testData');
const dashboardsPage = require('../../pageobjects/dashboardsPage');
const editDashboardComponent = require('../../pageobjects/editDashboardComponent');
const LoginPage = require('../../pageobjects/loginPage');
const sidebarComponent = require('../../pageobjects/sidebarComponent');
const teamsNotifier = require('../../helpers/teamsNotifier');

describe('Dashboard Page tests', () => {
	before(async function () {
		await LoginPage.open();
		await LoginPage.login(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
	});

	describe('Check statistics items in the widget Dashboard page', () => {
		it('Step 1 - Open project, select dashboard and check statistics items', async () => {
			await sidebarComponent.openProject('automated_testing_global_mentoring_program');
			await dashboardsPage.selectDashboard('DEMO DASHBOARD');
			let statisticsItems = await dashboardsPage.getLaunchStatisticsItems();

			expect(statisticsItems, `${JSON.stringify(statisticsItems)} is not equal ${JSON.stringify(testData.statuses)}`).to.deep.equal(testData.statuses);
		});
	});

	describe('Check widget description', () => {
		const newDescription = 'New Check apply widget names description';
		const oldDescription = 'Old Check apply widget names description';

		before(async function () {
			await LoginPage.open();
		});

		after(async function () {
			await editDashboardComponent.fillDescription(oldDescription);
			await editDashboardComponent.clickUpdateButton();
		});

		it('Step 1 - Open project, select dashboard, update description and check it', async () => {
			await sidebarComponent.openProject('automated_testing_global_mentoring_program');
			await dashboardsPage.selectDashboard('DEMO DASHBOARD');
			await dashboardsPage.clickEditDashboardButton();
			await editDashboardComponent.fillDescription(newDescription);
			await editDashboardComponent.clickUpdateButton();
			await dashboardsPage.clickEditDashboardButton();
			const description = await editDashboardComponent.getDescription();

			expect(description, `${description} is not equal ${newDescription}`).to.equal(newDescription);
		});
	});
});
