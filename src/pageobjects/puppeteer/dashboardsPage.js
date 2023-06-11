const elementHelper = require('../../helpers/puppeteer/elementHelper');
const puppeteerActions = require('../../helpers/puppeteer/puppeteerActions');
const timeouts = require('../../data/timeouts');
const Page = require('./page');
const EditDashboardComponent = require('./editDashboardComponent');

class DashboardsPage extends Page {
	constructor(page) {
		super();
		this.page = page;
	}

	static getDashboardByNameElement(name) {
		return `xpath///div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]`;
	}

	static getDashboardDescriptionByNameElement(name) {
		return `xpath///div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]/parent::div/div[contains(@class, "description")]`;
	}

	static getDashboardSharedByNameElement(name) {
		return `xpath///div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]/parent::div/div[contains(@class, "icon-cell")][1]//i`;
	}

	static getDashboardEditByNameElement(name) {
		return `xpath///div[contains(@class, "gridRow")]/a[normalize-space()="${name}"]/parent::div/div[contains(@class, "icon-cell")][2]`;
	}

	static getWidgetHeaderElements() {
		return '[class*=widgetHeader__info-block] > [class*=widgetHeader__widget-name]';
	}

	static getLaunchStatisticsItemElements() {
		return 'div.widgets-grid div.react-grid-item:nth-child(1) div[class*="statistics"]:nth-child(1) span[data-id*="statistics"] > span:nth-child(2)';
	}

	/*static getLaunchStatisticsAreaItemElements() {
		return 'div.widgets-grid div.react-grid-item:nth-child(2) div[class*="statistics"]:nth-child(1) span[data-id*="statistics"] > span:nth-child(2)';
	}*/

	static getLaunchStatisticsAreaItemElements() {
		return 'xpath///div[contains(@class, "widgetsGrid") and contains(., "LAUNCH STATISTICS AREA")]//span[contains(@data-id, "statistics")]/span[2]';
	}

	static getAddNewWidgetButtonElement() {
		return 'div > div[class*="buttons-block"]:nth-child(1) > button:nth-child(1)';
	}

	static getEditDashboardButtonElement() {
		return "div > div[class*='buttons-block']:nth-child(2) > button:nth-child(1)";
	}

	static getWidgetHeaderByIdElement(id) {
		return `div.widgets-grid div.react-grid-item:nth-child(${id}) div[class*='widget-name-block']`;
	}

	static getWidgetByName(name) {
		return `xpath///div[contains(@class, "widgetsGrid") and contains(., "${name}")]`;
	}

	static getOverallStatisticsByParameterElement(parameter) {
		return `xpath///div[contains(text(), "${parameter}")]/parent::div/div[contains(@class, "__amount")]`;
	}

	static getTitle() {
		return "span[title='All Dashboards']";
	}

	static getResizeButtonByWidgetName(name) {
		return `xpath///div[contains(@class, "widgetsGrid") and contains(., "${name}")]//span[contains(@class, "react-resizable-handle")]`;
	}

	async selectDashboard(name) {
		await elementHelper.click(DashboardsPage.getDashboardByNameElement(name), this.page);
		await this.page.waitForSelector(DashboardsPage.getEditDashboardButtonElement(), {timeout: timeouts.medium});
	}

	async getWidgetsNames() {
		return await elementHelper.getTextElementsArray(DashboardsPage.getWidgetHeaderElement(), this.page);
	}

	async getLaunchStatisticsItems() {
		return await elementHelper.getTextElementsArray(DashboardsPage.getLaunchStatisticsItemElements(), this.page);
	}

	async clickAddNewWidgetButton() {
		await elementHelper.click(DashboardsPage.getAddNewWidgetButtonElement(), this.page);
	}

	async clickEditDashboardButton() {
		await elementHelper.click(DashboardsPage.getEditDashboardButtonElement(), this.page);
		await EditDashboardComponent.getEditDashboardHeaderElement().waitForSelector({timeout: timeouts.medium});
	}

	async getDashboardDescriptionByName(name) {
		return await elementHelper.getText(DashboardsPage.getDashboardDescriptionByNameElement(name), this.page);
	}

	async getDashboardSharedByName(name) {
		return await elementHelper.getElementIsDisplayed(DashboardsPage.getDashboardSharedByNameElement(name), this.page);
	}

	async clickDashboardEditByNameButton(name) {
		await elementHelper.click(DashboardsPage.getDashboardEditByNameElement(name), this.page);
		await EditDashboardComponent.getEditDashboardHeaderElement().waitForSelector({timeout: timeouts.medium});
	}

	async getOverallStatisticsByParameter(parameter) {
		return await elementHelper.getText(DashboardsPage.getOverallStatisticsByParameterElement(parameter), this.page);
	}

	async resizeWidget(name, x, y) {
		await puppeteerActions.moveToElement(DashboardsPage.getWidgetByName(name), this.page);
		await puppeteerActions.dragAndDropElement(DashboardsPage.getResizeButtonByWidgetName(name), x, y, this.page);
	}

	async getWidgetSize(name) {
		return await puppeteerActions.getElementSize(DashboardsPage.getWidgetByName(name), this.page);
	}

	async setWidgetSize(name, x, y) {
		let size = await puppeteerActions.getElementSize(DashboardsPage.getWidgetByName(name), this.page);
		await puppeteerActions.dragAndDropElement(DashboardsPage.getResizeButtonByWidgetName(name), x - size.width, y - size.height, this.page);
	}

	async getLaunchStatisticsItemsSize() {
		return await puppeteerActions.getElementsSize(DashboardsPage.getLaunchStatisticsAreaItemElements(), this.page);
	}
}

module.exports = DashboardsPage;
