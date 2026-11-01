function realizarSubscription(email) {
    // Rolar até o rodapé
    //cy.get('#susbscribe_email').focus() - Focus também funciona
    cy.get('#susbscribe_email').scrollIntoView()
    
    // Verificar o texto 'SUBSCRIPTION'
    cy.get('div[class="single-widget"] > h2', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Subscription')

    // Digitar o endereço de e-mail no campo de entrada e clicar no botão de seta
    cy.get('#susbscribe_email').type(email)
    cy.get('#subscribe').click()

}

function validarMensagemSubscription(){
    // Verificar que a mensagem de sucesso 'You have been successfully subscribed!' está visível
    cy.get('div[class="alert-success alert"]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'You have been successfully subscribed!')
}

module.exports = {
    realizarSubscription,
    validarMensagemSubscription
}