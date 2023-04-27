const LoginPage = require('../../../src/pageobjects/loginPage');
const sidebarComponent = require('../../../src/pageobjects/sidebarComponent');
const logger = require('../../../src/utils/logger.js').logger;

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        logger.info('try to open');
        await LoginPage.open();
        logger.info('try to login');
        await LoginPage.login(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
        await sidebarComponent.open('launches');
        await sidebarComponent.open('dashboards');
    })
});