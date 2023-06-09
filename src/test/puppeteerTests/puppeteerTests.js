require('dotenv').config();
const expect = require('chai').expect;
const puppeteer = require('puppeteer');
const LoginPage = require('../../pageobjects/puppeteer/loginPage');
const DashboardsPage = require('../../pageobjects/puppeteer/dashboardsPage');
const SidebarComponent = require('../../pageobjects/puppeteer/sidebarComponent');
const puppeteerActions = require('../../helpers/puppeteer/puppeteerActions');

describe('Check if the edit button is into view', async () => {
	let browser, page, loginPage, dashboardsPage, sidebarComponent;

	before(async function () {
		browser = await puppeteer.launch({headless: false});
		page = await browser.newPage();
		dashboardsPage = new DashboardsPage(page);
		sidebarComponent = new SidebarComponent(page);
		await LoginPage.open(page);
		await LoginPage.login(page, process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
	});

	after(async function () {
		await browser.close();
	});

	afterEach(async function () {
		if (this.currentTest.state === 'failed') {
			const screenshotPath = `./screenshots/${this.currentTest.fullTitle().replace(/ /g, '_')}_${Date.now()}.png`;
			await page.screenshot({path: screenshotPath, fullPage: true});
		}
	});

	it('Step 1 - Select dashboard', async () => {
		await sidebarComponent.openProject('automated_testing_global_mentoring_program');
		await dashboardsPage.selectDashboard('Puppeteer tests');

		expect(
			await puppeteerActions.isElementScrolledIntoView(DashboardsPage.getEditDashboardButtonElement(), page),
			'Edit button is not into view after opening the dashboard page',
		).to.true;
	});

	it('Step 2 - Scroll down the page on 2000px', async () => {
		await puppeteerActions.scrollPage(0, 2000, page);

		expect(
			await puppeteerActions.isElementScrolledIntoView(DashboardsPage.getEditDashboardButtonElement(), page),
			'Edit button is into view after scrolled down the dashboard page',
		).to.false;
	});

	it('Step 3 - Scroll to the edit button', async () => {
		await puppeteerActions.scrollToElement(DashboardsPage.getEditDashboardButtonElement(), page);

		expect(
			await puppeteerActions.isElementScrolledIntoView(DashboardsPage.getEditDashboardButtonElement(), page),
			'Edit button is not into view after scrolled up the dashboard page to edit button',
		).to.true;
	});
});
