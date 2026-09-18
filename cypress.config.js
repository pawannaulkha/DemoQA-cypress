const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl :'https://demoqa.com',
    defaultCommandTimeout:10000,
    pageLoadTimeout:3000,
    video : false,
    screenshotOnRunFailure:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
      
    },
  },
});
