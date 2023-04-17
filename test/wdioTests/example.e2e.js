const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const logger = require('../../src/utils/logger.js').logger

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        logger.debug('try to login')
        logger.info('try to login')
        
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

