import elementHelper from "../helpers/elementHelper";

export const loginPageElements = {
        loginInput: elementHelper.getElement('input[name="login"]'),
        passwordInput: elementHelper.getElement('input[name="password"]'),
        submitButton: elementHelper.getElement('button[type="submit"]'),
};