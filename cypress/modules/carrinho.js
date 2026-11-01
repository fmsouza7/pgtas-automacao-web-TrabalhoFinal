function clicarAdiconarAoCarrinho() {
    // Clicar em Adicionar ao carrinho 
    cy.get('div[class*="productinfo"] > a[class*="add-to-cart"]').click();

    //Validar Informações modal
    cy.get('div[class*="modal-content"]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Added!')
        .and('contain', 'Your product has been added to cart.')

}

function clicarViewCart() {
     // Clicar em View Cart
    cy.get('p > a[href*=view_cart]').click();

    //Verificar que a página do carrinho está sendo exibida
    cy.get('section[id="cart_items"]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Shopping Cart')  

}

function clicarContinueShopping() {
    // Clicar em Continue Shopping para fechar o modal    
    cy.get('button[class*="btn-success close-modal"]').click()

}

function clicarProceedCheckout() {
    // Clicar em 'Proceed To Checkout'
    cy.get('[class*="btn-default check_out"]').click();
}

function validarTitulosCheckout() {
    // Verificar os detalhes do endereço e revisar o pedido
    cy.get('h2[class=heading]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Address Details')
        .and('contain', 'Review Your Order') 
}

function validarDetalhesEndereco() {
    // Verificar os detalhes do endereço
    cy.get('[class="address item box"]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Mrs. usuarioPgats testes')
        .and('contain', 'PGTAS')
        .and('contain', 'Av. Paulista, 1000')
        .and('contain', 'Av. Paulista, 2000')
        .and('contain', 'Toronto Toronto')
        .and('contain', '12345')
        .and('contain', 'Canada')
        .and('contain', '12345789')
}

function validarDetalhesPedido() {
    // Verificar os detalhes do pedido
    cy.get('[id="product-5"]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Winter Top')
        .and('contain', 'Women > Tops')
        .and('contain', 'Rs. 600')
        .and('contain', '2')
        .and('contain', 'Rs. 1200')
}

function inserirComentario() {
    // Clicar em 'Proceed To Checkout'
    cy.get('[name="message"]').type('Teste de compra de produtos');
}

function clicarPlaceOrder() {
    // Clicar em 'Place order'
    cy.get('[href*="payment"]').click();
}

module.exports = {
    clicarAdiconarAoCarrinho,
    clicarViewCart,
    clicarContinueShopping,
    clicarProceedCheckout,
    validarTitulosCheckout,
    validarDetalhesEndereco,
    validarDetalhesPedido,
    inserirComentario,
    clicarPlaceOrder
}