const elementHelper = require('../helpers/elementHelper');
const timeouts = require('../../data/timeouts');
const Page = require('./page');
const EditDashboardComponent = require('./editDashboardComponent');

class DashboardsPage extends Page {
	static getDashboardByNameElement(name) {
		return $(`//div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]`);
	}

	static getDashboardDescriptionByNameElement(name) {
		return $(`//div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]/parent::div/div[contains(@class, "description")]`);
	}

	static getDashboardSharedByNameElement(name) {
		return $(`//div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]/parent::div/div[contains(@class, "icon-cell")][1]//i`);
	}

	static getDashboardEditByNameElement(name) {
		return $(`//div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]/parent::div/div[contains(@class, "icon-cell")][2]`);
	}

	static getWidgetHeaderElements() {
		return $('[class*=widgetHeader__info-block] > [class*=widgetHeader__widget-name]');
	}

	static getLaunchStatisticsItemElements() {
		return $$('div.widgets-grid div.react-grid-item:nth-child(1) div[class*="statistics"]:nth-child(1) span[data-id*="statistics"] > span:nth-child(2)');
	}

	static getLaunchStatisticsAreaItemElements() {
		return $$('div.widgets-grid div.react-grid-item:nth-child(2) div[class*="statistics"]:nth-child(1) span[data-id*="statistics"] > span:nth-child(2)');
	}

	static getAddNewWidgetButtonElement() {
		return $('div > div[class*="buttons-block"]:nth-child(1) > button:nth-child(1)');
	}

	static getEditDashboardButtonElement() {
		return $('div > div[class*="buttons-block"]:nth-child(2) > button:nth-child(1)');
	}

	static getWidgetHeaderByIdElement(id) {
		return $(`div.widgets-grid div.react-grid-item:nth-child(${id}) div[class*='widget-name-block']`);
	}

	static getOverallStatisticsByParameterElement(parameter) {
		return $(`//div[contains(text(), "${parameter}")]/parent::div/div[contains(@class, "__amount")]`);
	}

	static async selectDashboard(name) {
		await elementHelper.click(DashboardsPage.getDashboardByNameElement(name));
		await DashboardsPage.getEditDashboardButtonElement().waitForDisplayed({timeout: timeouts.medium});
	}

	static async getWidgetsNames() {
		return await elementHelper.getTextElementsArray(DashboardsPage.getWidgetHeaderElement());
	}

	static async getLaunchStatisticsItems() {
		return await elementHelper.getTextElementsArray(DashboardsPage.getLaunchStatisticsItemElements());
	}

	static async clickAddNewWidgetButton() {
		await elementHelper.click(DashboardsPage.getAddNewWidgetButtonElement());
	}

	static async clickEditDashboardButton() {
		await elementHelper.click(DashboardsPage.getEditDashboardButtonElement());
		await EditDashboardComponent.getEditDashboardHeaderElement().waitForDisplayed({timeout: timeouts.medium});
	}

	static async getDashboardDescriptionByName(name) {
		return await elementHelper.getText(DashboardsPage.getDashboardDescriptionByNameElement(name));
	}

	static async getDashboardSharedByName(name) {
		return await DashboardsPage.getDashboardSharedByNameElement(name).isDisplayed();
	}

	static async clickDashboardEditByNameButton(name) {
		await elementHelper.click(DashboardsPage.getDashboardEditByNameElement(name));
		await EditDashboardComponent.getEditDashboardHeaderElement().waitForDisplayed({timeout: timeouts.medium});
	}

	static async getOverallStatisticsByParameter(parameter) {
		return await elementHelper.getText(DashboardsPage.getOverallStatisticsByParameterElement(parameter));
	}
}

module.exports = DashboardsPage;
