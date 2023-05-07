const Page = require('./page');
const elementHelper = require('../helpers/elementHelper');

class LoginPage extends Page {
	static getInputUsernameElement() {
		return $('input[name="login"]');
	}

	static getInputPasswordElement() {
		return $('input[name="password"]');
	}

	static getBtnSubmitElement() {
		return $('button[type="submit"]');
	}

	static async fillUserName(username) {
		await elementHelper.setValue(LoginPage.getInputUsernameElement(), username);
	}

	static async fillPassword(password) {
		await elementHelper.setValue(LoginPage.getInputPasswordElement(), password);
	}

	static async clickLoginButton() {
		await elementHelper.click(LoginPage.getBtnSubmitElement());
	}

	static async login(username, password) {
		await LoginPage.fillUserName(username);
		await LoginPage.fillPassword(password);
		await LoginPage.clickLoginButton();
	}
}

module.exports = LoginPage;
