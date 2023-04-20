const LoginPage = require('../../src/pageobjects/loginPage')
const logger = require('../../src/utils/logger.js').logger
require('dotenv').config();

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        logger.info('try to open')
        await LoginPage.open()
        logger.info('try to login')
        await LoginPage.login(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD)
    })
})