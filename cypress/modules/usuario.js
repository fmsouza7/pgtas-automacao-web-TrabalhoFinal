function iniciarCadastro(nome, email) {
    cy.get('[href*=login]').click()
    cy.get('.signup-form > h2', { timeout: 10000 })
        .should('contain.text', 'New User Signup!');
    
    cy.get('[data-qa="signup-name"]').type(nome)
    cy.get('[data-qa="signup-email"]').type(email)

    cy.get('[data-qa="signup-button"]').click()
    
}

function preencherCadastro(nome) {
    cy.get('.login-form > h2 > b', { timeout: 10000 })
        .should('contain.text', 'Enter Account Information');

    cy.get('#id_gender2').check()

    cy.get('[data-qa="password"]').type('12345')

    cy.get('#newsletter').check()
    cy.get('#optin').check()

    cy.get('#days').select('1')
    cy.get('#months').select('10')
    cy.get('#years').select('2021')

    cy.get('#first_name').type(nome)
    cy.get('#last_name').type('testes')
    cy.get('#company').type('PGTAS')

    cy.get('#address1').type('Av. Paulista, 1000')
    cy.get('#address2').type('Av. Paulista, 2000')

    cy.get('#country').select('Canada')
    cy.get('#state').type('Toronto')
    cy.get('#city').type('Toronto')
    cy.get('#zipcode').type('12345')
    cy.get('#mobile_number').type('12345789')

}

function validarCadastro(nome){
    cy.get('[data-qa="create-account"]').click()

    cy.get('h2[data-qa="account-created"] > b', { timeout: 10000 })
        .should('contain.text', 'Account Created');

    cy.get('[data-qa="continue-button"]').click()
    cy.get('a:has(i.fa-user)', { timeout: 10000 })
        .should('contain.text', `Logged in as ${nome}`);
}

function validarMensagemUsuarioExistente(){
    cy.get('.signup-form p', { timeout: 10000 })
        .should('contain.text', 'Email Address already exist!');
}

function deletarUsuario(){
    cy.get('[href="/delete_account"]').click()  
    cy.get('h2[data-qa="account-deleted"] > b', { timeout: 10000 })
        .should('contain.text', 'Account Deleted');
    cy.get('[data-qa="continue-button"]').click();
}

module.exports = {
    iniciarCadastro,
    preencherCadastro,
    validarCadastro,
    validarMensagemUsuarioExistente,
    deletarUsuario
}