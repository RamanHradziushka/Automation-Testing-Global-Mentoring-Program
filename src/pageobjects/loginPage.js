const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    get inputUsername () {
        return $('input[name="login"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async fillUserName(username) {
        await this.inputUsername.setValue(username);
    }

    async fillPassword(password) {
        await this.inputPassword.setValue(password);
    }

    async clickLoginButton() {
        await this.btnSubmit.click();
    }

    async login(username, password) {
        await this.fillUserName(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}

module.exports = new LoginPage();