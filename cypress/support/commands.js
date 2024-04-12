// Here we have created some custom commands to use in out tests

// Login command- Can be called simply using 'cy.login'
Cypress.Commands.add("login", (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();

    // Opening the login page
    cy.visit(Cypress.config("baseUrl"));      // 'baseURL' is defined in cypress.json

    // Enter the username and password
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
  
    // Submit the login form
    cy.get('button[type="submit"]').click();
  });