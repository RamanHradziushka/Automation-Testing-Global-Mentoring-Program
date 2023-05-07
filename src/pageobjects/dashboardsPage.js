const elementHelper = require('../helpers/elementHelper');
const Page = require('./page');

class DashboardsPage extends Page {
	static getDashboardByNameElement(name) {
		return $(`//div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]`);
	}

	static getWidgetHeaderElements() {
		return $('[class*=widgetHeader__info-block] > [class*=widgetHeader__widget-name]');
	}

	static getLaunchStatisticsItemElements() {
		return $$('div.widgets-grid div.react-grid-item:nth-child(1) div[class*="statistics"]:nth-child(1) span[data-id*="statistics"] > span:nth-child(2)');
	}

	static getAddNewWidgetButtonElement() {
		return $('div > div[class*="buttons-block"]:nth-child(1) > button:nth-child(1)');
	}

	static getEditDashboardButtonElement() {
		return $('div > div[class*="buttons-block"]:nth-child(2) > button:nth-child(1)');
	}

	static async selectDashboard(name) {
		await elementHelper.click(DashboardsPage.getDashboardByNameElement(name));
		await browser.pause(2000);
	}

	static async getWidgetsNames() {
		let names = await elementHelper.getTextElementsArray(DashboardsPage.getWidgetHeaderElement());
		return names;
	}

	static async getLaunchStatisticsItems() {
		let items = await elementHelper.getTextElementsArray(DashboardsPage.getLaunchStatisticsItemElements());
		return items;
	}

	static async clickAddNewWidgetButton() {
		await elementHelper.click(DashboardsPage.getAddNewWidgetButtonElement());
	}

	static async clickEditDashboardButton() {
		await elementHelper.click(DashboardsPage.getEditDashboardButtonElement());
		await browser.pause(1000);
	}
}

module.exports = DashboardsPage;
