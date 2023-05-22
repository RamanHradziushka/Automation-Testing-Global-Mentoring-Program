const timeouts = require('../data/timeouts');
const Page = require('../pageobjects/page');

const elementHelper = {
	click: async function (element) {
		await element.waitForClickable({timeout: timeouts.medium});
		await element.click();
	},

	clearValue: async function (element) {
		await element.waitForEnabled({timeout: timeouts.medium});
		await element.clearValue();
	},

	getValue: async function (element) {
		await element.waitForExist({timeout: timeouts.medium});
		return await element.getValue();
	},

	getText: async function (element) {
		await element.waitForExist({timeout: timeouts.medium});
		return await element.getText();
	},

	setValue: async function (element, value) {
		await element.waitForEnabled({timeout: timeouts.medium});
		await element.setValue(value);
	},

	getTextElementsArray: async function (elems) {
		const textArr = [];
		let elements = await elems;

		for (let element of elements) {
			await element.waitForExist({timeout: timeouts.medium});
			textArr.push(await this.getText(element));
		}
		return textArr;
	},
};

module.exports = elementHelper;
