import LoginPage from "../../support/PageObjects/LoginPage";
import HomePage from "../../support/PageObjects/HomePage";
import passwordResetPage from "../../support/PageObjects/PasswordResetPage";

describe("Login functionality validations", () => {
    beforeEach(() => {
      cy.visit(Cypress.config("baseUrl"));
    });
  
    describe("Login with valid username & password", () => {
      it("should login successfully", () => {
        cy.login("Admin", "admin123");
        HomePage.elements.dashboardSpan().should("have.text", "Dashboard");
      });
    });
  
    describe("Login with invalid or null user data input", () => {
      it("should have displayed incorrect username error message", () => {
        LoginPage.enterUsername("dummy_username");
        LoginPage.enterPassword("admin123");
        LoginPage.clickSubmitBtn();
  
        LoginPage.page_elements.errorMsg().should("have.text", "Invalid credentials");
      });
  
      it("should have displayed incorrect password error message", () => {
        LoginPage.enterUsername("Admin");
        LoginPage.enterPassword("dummy_password");
        LoginPage.clickSubmitBtn();
  
        LoginPage.page_elements.errorMsg().should("have.text", "Invalid credentials");
      });
  
      it("should have displayed empty username field message", () => {
        LoginPage.enterUsername(" ");
        LoginPage.enterPassword("admin123");
        LoginPage.clickSubmitBtn();
  
        LoginPage.page_elements
          .emptyUsernameFieldMsg()
          .should("have.text", "Required");
      });
  
      it("should have displayed empty password field message", () => {
        LoginPage.enterUsername("Admin");
        LoginPage.enterPassword(" ");
        LoginPage.clickSubmitBtn();
  
        LoginPage.page_elements
          .emptyPasswordFieldMsg()
          .should("have.text", "Required");
      });

    describe("Reset Password", () => {      
      it("should be able to reset password", () => {
        LoginPage.clickForgotPasswordBtn();
  
        // Navigate to Reset Password page & verify its title
        passwordResetPage.page_elements
          .resetPasswordSpan()
          .should("be.visible")
          .and("have.text", "Reset Password");
  
        // Enter username credentials & submit
        passwordResetPage.page_elements.usernameField().type("Admin");
        passwordResetPage.page_elements.resetPasswordBtn().click();
  
        // Verify reset password link is sent successfully
        passwordResetPage.page_elements
          .successfulPasswordResetMsg()
          .should("be.visible")
          .and("have.text", "Reset Password link sent successfully");
      });      
    });
  });
});