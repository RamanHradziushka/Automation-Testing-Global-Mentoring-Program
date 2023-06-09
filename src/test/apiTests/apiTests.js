const expect = require('chai').expect;
const {testData} = require('../../data/testData');
const apiHelper = require('../../helpers/apiHelper');

describe('Api test for dashboard', function () {
	let dashboardId;

	describe('Dashboard can be created', function () {
		it('Step 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).equal(1);
		});
	});

	describe('Dashboard without name should not be created', function () {
		it('Step 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboardWithoutName);
			dashboardId = response.id;

			expect(response.status, 'response status should not be equal 201').to.not.equal(201);
			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboardWithoutName.name).length,
				`Dashboard '${testData.testDashboardWithoutName.name}' should not be added`,
			).equal(0);
		});
	});

	describe('Dashboard with already existing name should not be created', function () {
		after(async function () {
			await apiHelper.deleteDashboardByName(testData.testDashboard.name);
		});

		it('Step 1 - Create dashboard', async function () {
			await apiHelper.addDashboard(testData.testDashboard);
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(response.status, 'response status should not be equal 201').to.not.equal(201);
			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should not be added`,
			).equal(1);
		});
	});

	describe('Dashboard can be deleted', function () {
		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).equal(1);
		});

		it('Step 1 - Delete dashboard', async function () {
			await apiHelper.deleteDashboard(dashboardId);

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be deleted`,
			).equal(0);
		});
	});

	describe(`Dashboard with invalid id can't be deleted`, function () {
		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).equal(1);
		});

		it('Step 1 - Delete dashboard in the first time', async function () {
			let response = await apiHelper.deleteDashboard(dashboardId);

			expect(response.status, 'response status should be equal 200').to.not.equal(200);
			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be deleted`,
			).equal(0);
		});

		it('Step 2 - Delete dashboard in the second time (id is invalid)', async function () {
			let response = await apiHelper.deleteDashboard(dashboardId);

			expect(response.status, 'response status should not be equal 200').to.not.equal(200);
		});
	});

	describe('Dashboard can be updated', function () {
		after(async function () {
			await apiHelper.deleteDashboard(dashboardId);
		});

		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).to.equal(1);
		});

		it('Step 1 - Update dashboard', async function () {
			await apiHelper.updateDashboard(dashboardId, 'description', 'update dashboard description');

			expect((await apiHelper.getDashboardById(dashboardId))['description'], `Dashboard should be updated`).to.equal('update dashboard description');
		});
	});

	describe(`Dashboard can't be updated to empty name`, function () {
		after(async function () {
			await apiHelper.deleteDashboard(dashboardId);
		});

		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).to.equal(1);
		});

		it('Step 1 - Update dashboard', async function () {
			let response = await apiHelper.updateDashboard(dashboardId, 'name', '');

			expect(response.status, 'response status should not be equal 200').to.not.equal(200);
			expect((await apiHelper.getDashboardById(dashboardId))['name'], `Dashboard should not be updated`).to.equal(testData.testDashboard.name);
		});
	});

	describe(`Dashboard with invalid id can't be updated`, function () {
		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).equal(1);
		});

		it('Step 1 - Delete dashboard', async function () {
			let response = await apiHelper.deleteDashboard(dashboardId);

			expect(response.status, 'response status should be equal 200').to.not.equal(200);
			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be deleted`,
			).equal(0);
		});

		it('Step 2 - Update dashboard with invalid id', async function () {
			await apiHelper.updateFullDashboard(dashboardId, testData.testDashboardSecondName);

			expect((await apiHelper.getDashboardById(dashboardId))['name'], `Dashboard should not be updated`).to.equal(undefined);
		});
	});

	describe(`Add widget to dashboard`, function () {
		after(async function () {
			await apiHelper.deleteDashboard(dashboardId);
		});

		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).equal(1);
		});

		it('Step 2 - Add widget to dashboard', async function () {
			await apiHelper.addWidgetToDashboard(dashboardId, testData.testWidget);

			expect((await apiHelper.getDashboardById(dashboardId))['widgets'][0], `Widget are not added to dashboard`).to.deep.equal(testData.testWidget.addWidget);
		});
	});

	describe(`Can't add already added widget to dashboard`, function () {
		after(async function () {
			await apiHelper.deleteDashboard(dashboardId);
		});

		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).equal(1);
		});

		it('Step 2 - Add widget to dashboard in the first time', async function () {
			await apiHelper.addWidgetToDashboard(dashboardId, testData.testWidget);

			expect((await apiHelper.getDashboardById(dashboardId))['widgets'][0], `Widget are not added to dashboard`).to.deep.equal(testData.testWidget.addWidget);
		});

		it('Step 2 - Add widget to dashboard in the second time', async function () {
			let response = await apiHelper.addWidgetToDashboard(dashboardId, testData.testWidget);

			expect(response.status, 'Response status should be equal 409').to.equal(409);
			expect((await apiHelper.getDashboardById(dashboardId))['widgets'].length, `Widget added to dashboard in the second time`).to.equal(1);
		});
	});

	describe(`Can't add widget with incorrect id`, function () {
		after(async function () {
			await apiHelper.deleteDashboard(dashboardId);
		});

		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).equal(1);
		});

		it('Step 2 - Add widget to dashboard', async function () {
			let response = await apiHelper.addWidgetToDashboard(dashboardId, testData.testWidgetWithIncorrectId);

			expect(response.status, 'Response status should be equal 404').to.equal(404);
			expect((await apiHelper.getDashboardById(dashboardId))['widgets'].length, `Widget added to dashboard in the second time`).to.equal(0);
		});
	});

	describe('Dashboard can be received', function () {
		after(async function () {
			await apiHelper.deleteDashboard(dashboardId);
		});

		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).to.equal(1);
		});

		it('Step 1 - Get dashboard', async function () {
			let response = await apiHelper.getDashboardById(dashboardId);

			expect(response.name, `dashboard name ${response.name} should be equal ${testData.testDashboard.name}`).to.equal(testData.testDashboard.name);
		});
	});

	describe(`Dashboard with invalid id can't be received`, function () {
		it('Precondition 1 - Create dashboard', async function () {
			let response = await apiHelper.addDashboard(testData.testDashboard);
			dashboardId = response.id;

			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be added`,
			).equal(1);
		});

		it('Precondition 2 - Delete dashboard', async function () {
			let response = await apiHelper.deleteDashboard(dashboardId);

			expect(response.status, 'response status should be equal 200').to.not.equal(200);
			expect(
				(await apiHelper.getDashboards()).filter((dashboard) => dashboard.name === testData.testDashboard.name).length,
				`Dashboard '${testData.testDashboard.name}' should be deleted`,
			).equal(0);
		});

		it('Step 1 - Get dashboard', async function () {
			let response = await apiHelper.getDashboardById(dashboardId);

			expect(response.status, 'response status should be equal 200').to.not.equal(200);
			expect(response.name, `dashboard name ${response.name} should be equal ${testData.testDashboard.name}`).to.equal(undefined);
		});
	});
});
