require('dotenv').config();
const TestConfig = require('../utils/testconfig');
const teamsNotifier = require('../helpers/teamsNotifier');

exports.config = {
	user: process.env.SAUCE_USERNAME,
	key: process.env.SAUCE_ACCESS_KEY,
	// ====================
	// More information about the configuration is found here https://webdriver.io/docs/configurationfile.html
	// ====================
	runner: 'local',
	specs: ['../test/wdioTests/**/*Tests.js'],
	maxInstances: 100,
	logLevel: 'warn',
	bail: 0,
	baseUrl: TestConfig.platform,
	waitforTimeout: 30000,
	// A timeout of 3 min
	connectionRetryTimeout: 3 * 60 * 1000,
	connectionRetryCount: 3,
	reporters: ['spec'],
	//services: [],
	// ====================
	// Add Sauce Connect
	// ====================
	services: [
		[
			'sauce',
			{
				sauceConnect: true,
			},
		],
	],
	//Screener Configuration
	hostname: 'ondemand.eu-central-1.saucelabs.com',
	port: 443,
	protocol: 'https',
	path: '/wd/hub',
	capabilities: [
		{
			browserName: 'Chrome',
			browserVersion: 'latest',
			platformName: 'Windows 11',
			'sauce:options': {
				build: 'selenium-build-UW04Z',
				name: 'Automated Testing Global Mentoring Program',
			},
		},
	],

	framework: 'mocha',
	mochaOpts: {
		ui: 'bdd',
		/**
		 * !IMPORTANT!
		 * If you use multiple visual assertions in 1 single test (an `it`) then you might need to
		 * increase this value. A single visual assertion can take up to 30-45 seconds.
		 * A combination of E2E steps and a 2 or 3 visual checks might already exceed the single `it`
		 * timeout that is set here.
		 */
		timeout: 120000,
	},
};
