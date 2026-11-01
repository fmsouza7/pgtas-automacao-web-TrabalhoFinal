// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Cypress.on('uncaught:exception', (err, runnable) => {
//   // Ignora o erro específico de segurança de Cross-Origin Frame
//   if (err.message.includes("Blocked a frame with origin") || err.message.includes("Failed to read a named property 'document'")) {
//     return false;
//   }
//   // Permite que outros erros legítimos da aplicação ainda quebrem o teste
//   return true;
// });

// Cypress.on('uncaught:exception', (err, runnable) => {
//   // Ignora absolutamente qualquer erro originado na aplicação/anúncios
//   return false;
// });

import 'cypress-mochawesome-reporter/register';