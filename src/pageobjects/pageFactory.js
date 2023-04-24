const LoginPage = require("./loginPage");

class PageFactory {
  constructor(browser) {
    this.loginPage = new LoginPage(browser);
  }
}

module.exports = PageFactory;