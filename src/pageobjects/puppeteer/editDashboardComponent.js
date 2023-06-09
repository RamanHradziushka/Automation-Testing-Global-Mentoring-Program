const elementHelper = require('../../helpers/puppeteer/elementHelper');
const BaseComponent = require('./baseComponent');

class EditDashboardComponent extends BaseComponent {
	constructor(page) {
		super();
		this.page = page;
	}

	static getEditDashboardHeaderElement() {
		return $('//span[contains(text(), "Edit Dashboard")]');
	}

	static getDescriptionDashboardElement() {
		return $('textarea[placeholder="Enter dashboard description"]');
	}

	static getSharedDashboardElement() {
		return $('div[class*="Switcher__turned-on"]');
	}

	static getCancelButtonElement() {
		return $('div[class*="buttons-block"] > div[class*="button-container"]:nth-child(1) > button');
	}

	static getUpdateButtonElement() {
		return $('div[class*="buttons-block"] > div[class*="button-container"]:nth-child(2) > button');
	}

	static async getDescription() {
		return await elementHelper.getValue(EditDashboardComponent.getDescriptionDashboardElement());
	}

	static async getIsShared() {
		return await EditDashboardComponent.getSharedDashboardElement().isDisplayed();
	}

	static async fillDescription(description) {
		await elementHelper.setValue(EditDashboardComponent.getDescriptionDashboardElement(), description);
	}

	static async clickUpdateButton() {
		await elementHelper.click(EditDashboardComponent.getUpdateButtonElement());
	}

	static async clickCancelButton() {
		await elementHelper.click(EditDashboardComponent.getCancelButtonElement());
	}
}

module.exports = EditDashboardComponent;
