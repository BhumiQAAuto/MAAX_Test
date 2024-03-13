const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     "baseUrl": 'https://maax.com/',
      "chromeWebSecurity": false,
      "defaultCommandTimeout": 10000,
      "pageLoadTimeout": 30000,
      "viewportHeight": 1080,
      "viewportWidth": 1920,
  },
});
