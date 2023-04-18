import elementHelper from "../helpers/elementHelper";

export const loginPageElements = {
        loginInput: {
            locator: elementHelper.getElement('input[name="login"]'),
        },
        passwordInput: {
            locator: elementHelper.getElement('input[name="password"]'),
        },
        submitButton: {
            locator: elementHelper.getElement('button[type="submit"]'),
        },
};