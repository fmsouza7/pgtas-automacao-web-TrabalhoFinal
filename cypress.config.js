const { defineConfig } = require("cypress");
//const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/plugin')(on);

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 8000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('vefire:run', async (details) => {
      //   console.log('override befire:run');
      //   await beforeRunHook(details);
      // });

    },
    
  },
});
