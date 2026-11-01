function acessarUrl() {
    cy.visit('https://www.automationexercise.com');
    cy.title().should('eq', 'Automation Exercise');
}

module.exports = {
    acessarUrl
}