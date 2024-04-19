const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '68gcus',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },
  e2e: {
    setupNodeEvents(on, _config) {
      this.screenshotOnRunFailure=true,
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    baseUrl:
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  },
});
