const expect = require('chai').expect;
const {testData} = require('../../../data/testData');
const dashboardsPage = require('../../../pageobjects/dashboardsPage');
const editDashboardComponent = require('../../../pageobjects/editDashboardComponent');
const LoginPage = require('../../../pageobjects/loginPage');
const sidebarComponent = require('../../../pageobjects/sidebarComponent');

describe('Dashboard Page tests', () => {
	before(async function () {
		await LoginPage.open();
		await LoginPage.login(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
	});

	describe('Check dashboards descriptions', () => {
		const dashboards = testData.dashboards;

		it('Step 1 - Open project', async () => {
			await sidebarComponent.openProject('automated_testing_global_mentoring_program');
		});

		for (let dashboard of dashboards) {
			it(`Step 2 - Check description dashboard ${dashboard.name}`, async () => {
				expect(await dashboardsPage.getDashboardDescriptionByName(dashboard.name)).to.equal(dashboard.description);
			});

			it(`Step 3.1 - Check description dashboard ${dashboard.name} in the edit component`, async () => {
				await dashboardsPage.clickDashboardEditByNameButton(dashboard.name);

				expect(await editDashboardComponent.getDescription()).to.equal(dashboard.description);
			});

			it(`Step 3.2 - Check description dashboard ${dashboard.name} in the edit component`, async () => {
				await editDashboardComponent.clickUpdateButton();
			});
		}
	});

	describe('Check dashboards shared', () => {
		const dashboards = testData.dashboards;

		it('Step 1 - Open project', async () => {
			await sidebarComponent.openProject('automated_testing_global_mentoring_program');
		});

		for (let dashboard of dashboards) {
			it(`Step 2 - Check dashboard ${dashboard.name} is shared`, async () => {
				expect(await dashboardsPage.getDashboardSharedByName(dashboard.name)).to.equal(dashboard.shared);
			});

			it(`Step 3.1 - Check dashboard ${dashboard.name} is shared in the edit component`, async () => {
				await dashboardsPage.clickDashboardEditByNameButton(dashboard.name);

				expect(await editDashboardComponent.getIsShared()).to.equal(dashboard.shared);
			});

			it(`Step 3.2 - Check dashboard ${dashboard.name} is shared in the edit component`, async () => {
				await editDashboardComponent.clickUpdateButton();
			});
		}
	});

	describe('Check dashboards launch statistics', () => {
		const dashboards = testData.dashboardsLaunchStatisticsArea;

		it('Step 1 - Open project', async () => {
			await sidebarComponent.openProject('automated_testing_global_mentoring_program');
		});

		for (let dashboardboard of dashboards) {
			it(`Step 2 - Open dashboard ${dashboardboard.name}`, async () => {
				await dashboardsPage.selectDashboard(dashboardboard.name);
			});

			it(`Step 3.1 - Check dashboard ${dashboardboard.name} launch statistics`, async () => {
				expect(await dashboardsPage.getLaunchStatisticsItems()).to.deep.equal(dashboardboard.statuses);
			});

			it(`Step 3.2 - Check dashboard ${dashboardboard.name} launch statistics`, async () => {
				await sidebarComponent.openDashboards();
			});
		}
	});
});
