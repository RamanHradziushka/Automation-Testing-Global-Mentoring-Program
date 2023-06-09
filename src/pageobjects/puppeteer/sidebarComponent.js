const BaseComponent = require('./baseComponent');
const DashboardsPage = require('./dashboardsPage');
const elementHelper = require('../../helpers/puppeteer/elementHelper');
const timeouts = require('../../data/timeouts');

class SidebarComponent extends BaseComponent {
	constructor(page) {
		super();
		this.page = page;
	}

	static getMenuByNameElement(name) {
		return `div[class*="sidebar"] > a[href*="${name}"]`;
	}

	static getProjectSelectorMenuElement() {
		return 'div[class*="projectSelector"]';
	}

	static getProjectByNameElement(name) {
		return `span[title="${name}"]`;
	}

	async openMenu(menuName) {
		await elementHelper.click(SidebarComponent.getMenuByNameElement(menuName), this.page);
	}

	async openProjectSelectorMenu() {
		await elementHelper.click(SidebarComponent.getProjectSelectorMenuElement(), this.page);
	}

	async selectProject(projectName) {
		await elementHelper.click(SidebarComponent.getProjectByNameElement(projectName), this.page);
	}

	async openProject(projectName) {
		await this.openProjectSelectorMenu();
		await this.selectProject(projectName);
		await this.page.waitForSelector(DashboardsPage.getTitle(), {timeout: timeouts.medium, visible: true});
	}

	async openDashboards() {
		await this.openMenu('dashboard');
	}
}

module.exports = SidebarComponent;
