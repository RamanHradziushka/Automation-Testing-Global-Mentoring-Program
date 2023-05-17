const Page = require('./page');
const elementHelper = require('../helpers/elementHelper');

class SidebarComponent extends Page {
	static getMenuByNameElement(name) {
		return $(`div[class*="sidebar"] > a[href*="${name}"]`);
	}

	static getProjectSelectorMenuElement() {
		return $('div[class*="projectSelector"]');
	}

	static getProjectByNameElement(name) {
		return $(`span[title="${name}"]`);
	}

	static async openMenu(menuName) {
		await elementHelper.click(SidebarComponent.getMenuByNameElement(menuName));
	}

	static async openProjectSelectorMenu() {
		await elementHelper.click(SidebarComponent.getProjectSelectorMenuElement());
	}

	static async selectProject(projectName) {
		await elementHelper.click(SidebarComponent.getProjectByNameElement(projectName));
	}

	static async openProject(projectName) {
		await SidebarComponent.openProjectSelectorMenu();
		await SidebarComponent.selectProject(projectName);
	}

	static async openDashboards() {
		await SidebarComponent.openMenu('dashboard');
	}
}

module.exports = SidebarComponent;
