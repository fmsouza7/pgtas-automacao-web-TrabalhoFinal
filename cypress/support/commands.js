// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import { cadastrarUsuarioXp, cadastrarUsuarioEmailExistenteXp, deletarUsuarioXp } from '../helpers/usuarioHelperXpath.js';
// import { loginXp, loginInvalidoXp, logoutXp } from '../helpers/loginHelperXpath.js';

// Cypress.Commands.add('cadastrarUsuarioXp', (nome, email) => {
//   cadastrarUsuarioXp(nome, email);
// });

// Cypress.Commands.add('cadastrarUsuarioEmailExistenteXp', (nome, email) => {
//   cadastrarUsuarioEmailExistenteXp(nome, email);
// });

// Cypress.Commands.add('deletarUsuarioXp', () => {
//   deletarUsuarioXp();
// });

// Cypress.Commands.add('loginInvalidoXp', (email, senha) => {
//   loginInvalidoXp(email, senha);
// });

// Cypress.Commands.add('loginXp', (nome, email, senha) => {
//   loginXp(nome, email, senha);
// });

// Cypress.Commands.add('logoutXp', () => {
//   logoutXp();
// });