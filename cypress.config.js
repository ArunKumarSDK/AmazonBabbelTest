const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'uk5es4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  },
});
