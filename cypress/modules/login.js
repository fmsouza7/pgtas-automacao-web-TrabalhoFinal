function realizarLogin(email, senha) {
    cy.get('[href*=login]').click()
    cy.get('.login-form > h2', { timeout: 10000 })
        .should('contain.text', 'Login to your account');

    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click()

}

function validarMensagemLoginSucesso(nome) {
    cy.get('a:has(i.fa-user)', { timeout: 10000 })
        .should('contain.text', `Logged in as ${nome}`);
}

function validarMensagemLoginInvalido(email, senha) {
    cy.get('.login-form p', { timeout: 10000 })
        .should('contain.text', 'Your email or password is incorrect!');

}

function logout() {
    cy.get('[href*="logout"]').click()
    cy.get('.login-form > h2', { timeout: 10000 })
        .should('contain.text', 'Login to your account');

}

module.exports = {
    realizarLogin,
    validarMensagemLoginSucesso,
    validarMensagemLoginInvalido,
    logout
}