const elementHelper = require('../helpers/elementHelper');
const BaseComponent = require('./baseComponent');

class AddNewWidgetComponent extends BaseComponent {
	static getWidgetTypeElements() {
		return $$('div[class*="widget-type-item-name"]');
	}

	static async getWidgetTypes() {
		let types = await elementHelper.getTextElementsArray(AddNewWidgetComponent.getWidgetTypeElements());
		return types;
	}
}

module.exports = AddNewWidgetComponent;
