const data = require("../../fixtures/loginData.json");

class LoginPage {
    page_elements = {
      loginTitle: () => cy.get(".oxd-text--h5"),
      txtUsername: () => cy.get('input[name="username"]'),
      txtPassword: () => cy.get('input[name="password"]'),
      submitBtn: () => cy.get('button[type="submit"]'),
      errorMsg: () => cy.get('div[role="alert"]'),
      emptyUsernameFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
      emptyPasswordFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
      forgotPasswordBtn: () => cy.contains("Forgot your password?"),
      dropdownAboutAlert: () => cy.get(".orangehrm-modal-header > .oxd-text"),
    };

  enterUsername(username) {
    this.page_elements.txtUsername().type(username);
  }

  enterPassword(password) {
    this.page_elements.txtPassword().type(password);
  }

  clickSubmitBtn() {
    this.page_elements.submitBtn().click();
  }

  clickForgotPasswordBtn() {
    this.page_elements.forgotPasswordBtn().click();
  }

  getErrorMsg() {
    this.page_elements.errorMsg(data.expected);
  }
}

module.exports = new LoginPage();
