const Api = require('./api');

let api = new Api();

const apiHelper = {
	getDashboards: async function () {
		let response = await api.get(`/dashboard`);

		return response.content;
	},
	addDashboard: async function (dashboard) {
		return await api.post(`/dashboard`, dashboard);
	},
	deleteDashboard: async function (dashboardId) {
		return await api.delete(`/dashboard/${dashboardId}`);
	},
	updateDashboard: async function (dashboardId, updateProperty, newValue) {
		let dashboard = await this.getDashboardById(dashboardId);
		dashboard[updateProperty] = newValue;

		return await api.put(`/dashboard/${dashboardId}`, dashboard);
	},
	getDashboardById: async function (dashboardId) {
		let response = await api.get(`/dashboard/${dashboardId}`);

		return response;
	},
	getDashboardByName: async function (dashboardName) {
		let dashboards = await this.getDashboards();

		return dashboards.filter((dashboard) => dashboard.name === dashboardName);
	},
	deleteDashboardByName: async function (dashboardName) {
		let dashboards = await apiHelper.getDashboardByName(dashboardName);
		for (let dashboard of dashboards) {
			await apiHelper.deleteDashboard(`${dashboard.id}`);
		}
	},
};

module.exports = apiHelper;
