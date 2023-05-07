const elementHelper = require('../helpers/elementHelper');
const Page = require('./page');

class EditDashboardComponent extends Page {
	static getDescriptionDashboardElement() {
		return $('textarea[placeholder="Enter dashboard description"]');
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

	static async fillDescription(description) {
		await elementHelper.setValue(EditDashboardComponent.getDescriptionDashboardElement(), description);
	}

	static async clickUpdateButton() {
		await elementHelper.click(EditDashboardComponent.getUpdateButtonElement());
	}
}

module.exports = EditDashboardComponent;
