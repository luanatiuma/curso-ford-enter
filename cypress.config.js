const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5500/', //configuração para destacar a url padrão para os testes
    experimentalStudio:  true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
