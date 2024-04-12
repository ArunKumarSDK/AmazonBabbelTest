const data = require("../../fixtures/loginData.json");

class HomePage {
  elements = {
    dashboardSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
  };
}

module.exports = new HomePage();