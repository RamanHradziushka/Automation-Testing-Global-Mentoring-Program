import {loginPageElements} from "../elements/loginPageElements";

export class LoginPage {
    async inputUserName(userName) {
        await loginPageElements.loginInput.setValue(userName);
    }

    async inputUserPassword(userPassword) {
        await loginPageElements.loginInput.setValue(userPassword);
    }

    async clickSubmitButton() {
        await ElementHelper.click(loginPageElements.submitButton);
    }

    async login(userName, userPassword) {
        await LoginPage.inputUserName(userName);
        await LoginPage.inputUserPassword(userPassword);
        await LoginPage.clickSubmitButton();
    }
}