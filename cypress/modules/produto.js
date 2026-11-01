function acessarPaginaDeProdutos() {
    //Clicar no botão 'Products'
    cy.get('[href="/products"]').click();

    //Verificar que o usuário foi direcionado para a página ALL PRODUCTS com sucesso
    cy.get('h2[class*=title]', { timeout: 10000 })
        .should('contain.text', 'All Products');

    //A lista de produtos está visível
    cy.get('div[class="features_items"]', { timeout: 10000 })
        .should('be.visible');

}

function visualizarDetalheProduto(){
    //Clicar em 'View Product' do primeiro produto
    cy.get('a[href="/product_details/1"]').click();

    //O usuário é direcionado para a página de detalhes do produto
    cy.get('div[class="product-details"]', { timeout: 10000 })
        .should('be.visible');
}

function validarDetalheProduto() {
    //Verificar que os detalhes estão visíveis: nome do produto, categoria, preço, disponibilidade, condição, marca
    cy.get('div[class="product-information"]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Blue Top')
        .and('contain', 'Category: Women > Tops')
        .and('contain', 'Rs. 500')
        .and('contain', 'In Stock')
        .and('contain', 'New')
        .and('contain', 'Polo')
}

function pesquisarProduto(nomeProduto) {
    // Digitar o nome do produto no campo de busca e clicar no botão de pesquisa
    cy.get('#search_product').type(nomeProduto)
    cy.get('#submit_search').click();

    // Verificar que 'SEARCHED PRODUCTS' está visível
    cy.get('h2[class*=title]', { timeout: 10000 })
        .should('contain.text', 'Searched Products');

}

function validarProdutoPesquisado() {
    //Verify all the products related to search are visible
    cy.get('div[class*="productinfo"]', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'Rs. 600')
        .and('contain', 'Winter Top')
}

module.exports = {
    acessarPaginaDeProdutos,
    visualizarDetalheProduto,
    pesquisarProduto,
    validarDetalheProduto,
    validarProdutoPesquisado
}