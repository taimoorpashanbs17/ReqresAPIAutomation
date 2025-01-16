const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reqres.in',
    specPattern: 'cypress/e2e/api-tests/*.spec.js',
    reporter: 'mochawesome', // Specify the correct reporter name
    reporterOptions: {
      reportDir: 'cypress/reports', // Output directory for the report
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
