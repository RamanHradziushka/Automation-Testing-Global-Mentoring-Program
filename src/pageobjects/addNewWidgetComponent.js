const elementHelper = require('../helpers/elementHelper');
const Page = require('./page');

class AddNewWidgetComponent extends Page {
	static getWidgetTypeElements() {
		return $$('div[class*="widget-type-item-name"]');
	}

	static async getWidgetTypes() {
		let types = await elementHelper.getTextElementsArray(AddNewWidgetComponent.getWidgetTypeElements());
		return types;
	}
}

module.exports = AddNewWidgetComponent;
