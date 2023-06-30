const elementHelper = require('../../helpers/puppeteer/elementHelper');
const Page = require('./page');

class LoginPage extends Page {
	static getInputUsernameElement() {
		return 'input[name="login"]';
	}

	static getInputPasswordElement() {
		return 'input[name="password"]';
	}

	static getBtnSubmitElement() {
		return 'button[type="submit"]';
	}

	static async fillUserName(page, username) {
		await elementHelper.setValue(LoginPage.getInputUsernameElement(), username, page);
	}

	static async fillPassword(page, password) {
		await elementHelper.setValue(LoginPage.getInputPasswordElement(), password, page);
	}

	static async clickLoginButton(page) {
		await elementHelper.click(LoginPage.getBtnSubmitElement(), page);
	}

	static async login(page, username, password) {
		await LoginPage.fillUserName(page, username);
		await LoginPage.fillPassword(page, password);
		await LoginPage.clickLoginButton(page);
	}
}

module.exports = LoginPage;
