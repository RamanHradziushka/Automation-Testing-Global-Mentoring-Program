const timeouts = require('../../data/timeouts');
const logger = require('../../utils/logger.js').logger;

const puppeteerActions = {
	dragAndDropElement: async function (elementFrom, x, y, page) {
		await page.waitForSelector(elementFrom, {timeout: timeouts.medium, visible: true});
		const from = await page.$(elementFrom);
		const fromBox = await from.boundingBox();
		await page.mouse.move(fromBox.x + fromBox.width / 2, fromBox.y + fromBox.height / 2);
		await page.mouse.down();
		await page.waitForTimeout(timeouts.short);
		await page.mouse.move(fromBox.x + fromBox.width / 2 + x, fromBox.y + fromBox.height / 2 + y);
		await page.mouse.up();
		await page.waitForTimeout(timeouts.short);
	},

	resizeElement: async function (locator, width, height, page) {
		await page.waitForSelector(locator, {timeout: timeouts.medium, visible: true});
		await page.evaluate(
			(locator, width, height) => {
				let element = document.querySelector(locator);
				element.style.width = `${width}px`;
				element.style.height = `${height}px`;
			},
			locator,
			width,
			height,
		);
		await page.waitForTimeout(timeouts.short);
	},

	//scroll doesn't work on the RP
	scrollToElement: async function (locator, page) {
		await page.waitForSelector(locator, {timeout: timeouts.medium, visible: true});
		const element = await page.$(locator);
		const elementBox = await element.boundingBox();
		await page.evaluate(
			(x, y) => {
				window.scrollBy(x, y);
			},
			elementBox.x,
			elementBox.y,
		);
	},

	scrollPage: async function (x, y, page) {
		await page.evaluate(
			(x, y) => {
				window.scrollBy(x, y);
			},
			x,
			y,
		);
	},

	isElementScrolledIntoView: async function (locator, page) {
		await page.waitForSelector(locator, {timeout: timeouts.medium, visible: true});
		return await page.evaluate((locator) => {
			const element = document.querySelector(locator);
			const style = getComputedStyle(element);
			const rect = element.getBoundingClientRect();
			let windowWidth = window.innerWidth || document.documentElement.clientWidth;
			let windowHeight = window.innerHeight || document.documentElement.clientHeight;

			let isHorizontalInView = rect.left <= windowWidth && rect.right >= 0;
			let isVerticalInView = rect.top <= windowHeight && rect.bottom >= 0;

			return style.visibility !== 'hidden' && isVerticalInView && isHorizontalInView;
		}, locator);
	},

	clickElement: async function (locator, page) {
		await page.waitForSelector(locator, {timeout: timeouts.medium, visible: true});
		await page.evaluate((locator) => {
			let element = document.querySelector(locator);
			element.click();
		}, locator);
	},
};

module.exports = puppeteerActions;
