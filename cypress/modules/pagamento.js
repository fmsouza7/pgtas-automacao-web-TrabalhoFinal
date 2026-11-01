function realizarPagamento() {
    // Inserir os detalhes de pagamento: Nome no Cartão, Número do Cartão, CVC, Data de Expiração
    cy.get('h2[class="heading"]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Payment')

    cy.get('[data-qa="name-on-card"]').type('Master');
    cy.get('[data-qa="card-number"]').type('1234567890');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('10');
    cy.get('[data-qa="expiry-year"]').type('2030');

    // Clicar no botão 'Pay and Confirm Order'
    cy.get('[data-qa="pay-button"]').click();

}

function validarInformacoesPedidoRealizado(){
    // Verificar Titulo "ORDER PLACED"
    cy.get('h2[class*="title"] > b', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Order Placed!')  

    // Validar mensagem "Congratulations! Your order has been confirmed!"
    cy.get('section p', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Congratulations! Your order has been confirmed!')  

    // Clicar em Continue
    cy.get('[data-qa="continue-button"]').click();
}

// Como esta validação é muito instavel e funciona somente no Chrome com a tela interativa do cypress
// revolvi validar outro ponto após clicar em "Pay and Confirm Order"
// Consultei a IA para tentar verificar este problema e passou algumas formas de tentar contornar
// mas era um pouco mais complexo e resolvi ir pelo caminho mais simples
function validarMensagemPagamentoSucesso(){
    // Verificar a mensagem de sucesso 'Your order has been placed successfully!'
    
    // 1. Só funciona na tela interativa do cypress quando executado no chrome
    // 2. Tela interativa + electron o processo é mais rapido e n]ao consegue captar a mensagem
    // 3. via comando npx com headless, tanto chrome como electrom da erro por ser mias rapido tb
    // Tentei várias formas mais nenhuma com sucesso, pois nos itens 2 e 3 é realizado o Page Reload
    // antes de conseguir validar a mensagem
    cy.get('#success_message', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Your order has been placed successfully!')  
}

module.exports = {
    realizarPagamento,
    validarInformacoesPedidoRealizado,
    validarMensagemPagamentoSucesso
}