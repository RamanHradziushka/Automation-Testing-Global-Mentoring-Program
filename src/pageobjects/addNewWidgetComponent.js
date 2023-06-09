const elementHelper = require('../helpers/elementHelper');
const BaseComponent = require('./baseComponent');

class AddNewWidgetComponent extends BaseComponent {
	static getWidgetTypeElements() {
		return $$('div[class*="widget-type-item-name"]');
	}

	static async getWidgetTypes() {
		return await elementHelper.getTextElementsArray(AddNewWidgetComponent.getWidgetTypeElements());
	}
}

module.exports = AddNewWidgetComponent;
