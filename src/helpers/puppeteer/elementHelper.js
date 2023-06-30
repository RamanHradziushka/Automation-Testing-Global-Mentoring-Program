const timeouts = require('../../data/timeouts');
const logger = require('../../utils/logger.js').logger;

const elementHelper = {
	click: async function (element, page) {
		logger.info(`try to click to element with locator: ${element}`);
		await page.waitForSelector(element, {timeout: timeouts.medium, visible: true});
		await page.click(element);
	},

	clearValue: async function (element, page) {
		logger.info(`try to clear value from element with locator: ${element}`);
		await page.waitForSelector(element, {timeout: timeouts.medium, visible: true});
		await page.evaluate((el) => (document.querySelector(el).value = ''), element);
	},

	getValue: async function (element, page) {
		logger.info(`try to get value from element with locator: ${element}`);
		await page.waitForSelector(element, {timeout: timeouts.medium, visible: true});
		return await page.evaluate((el) => document.querySelector(el).value, element);
	},

	getText: async function (element, page) {
		logger.info(`try to get text from element with locator: ${element}`);
		await page.waitForSelector(element, {timeout: timeouts.medium, visible: true});
		return await page.evaluate((el) => document.querySelector(el).innerText, element);
	},

	setValue: async function (element, value, page) {
		logger.info(`try to set value to element with locator: ${element}`);
		await page.waitForSelector(element, {timeout: timeouts.medium, visible: true});
		await page.type(element, value);
	},

	getTextElementsArray: async function (elems, page) {
		logger.info(`try to get text from elements with locator: ${elems}`);
		await page.waitForSelector(elems, {timeout: timeouts.medium, visible: true});
		return await page.$$eval(elems, (elements) => elements.map((el) => el.textContent));
	},

	getElementIsDisplayed: async function (element, page) {
		logger.info(`check element with locator: ${element} is displayed`);
		return await page.waitForSelector(element, {timeout: timeouts.medium, visible: true});
	},
};

module.exports = elementHelper;
