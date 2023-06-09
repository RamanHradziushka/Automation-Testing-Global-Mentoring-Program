const {Given, When, Then} = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/loginPage');

Given('I open login page', async function () {
	await LoginPage.open();
});

Given('I log in with the ADMINUSERNAME and ADMINPASSWORD credentials', async function () {
	await LoginPage.login(process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
});
