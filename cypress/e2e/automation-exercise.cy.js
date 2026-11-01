/// <reference types="cypress" />

// Constantes dos Modulos
const cadastro = require('../modules/usuario.js');
const carrinho = require('../modules/carrinho.js');
const login = require('../modules/login.js');
const pagamento = require('../modules/pagamento.js');
const produto = require('../modules/produto.js');
const subscription = require('../modules/subscription.js');
const url = require('../modules/index.js');

// Constantes Gerais
const nome = 'usuarioPgats';
const email = `usuarioPgats@pgats.com`;
const senha = '12345';

describe('Automation Exercise', () => {

  beforeEach(() => {
    url.acessarUrl();
  });

  it('Test Case 1: Register User', () => {
    cadastro.iniciarCadastro(nome, email);
    cadastro.preencherCadastro(nome);
    cadastro.validarCadastro(nome);

  }),
  it('Test Case 2: Login User with correct email and password', () => {
    login.realizarLogin(email, senha);
    login.validarMensagemLoginSucesso(nome);

  }),
  it('Test Case 3: Login User with incorrect email and password', () => {
    login.realizarLogin('jumanji@jumanji.com.pt', '12345jumanji');
    login.validarMensagemLoginInvalido();

  }),
  it('Test Case 4: Logout User', () => {
    login.realizarLogin(email, senha);
    login.logout();

  }),
  it('Test Case 5: Register User with existing email', () => {
    cadastro.iniciarCadastro(nome, email);
    cadastro.validarMensagemUsuarioExistente();
    
  }),
  it('Test Case 8: Verify All Products and product detail page', () => {
    produto.acessarPaginaDeProdutos();
    produto.visualizarDetalheProduto();
    produto.validarDetalheProduto();

  }),
  it('Test Case 9: Search Product', () => {
    produto.acessarPaginaDeProdutos();
    produto.pesquisarProduto('Winter Top');
    produto.validarProdutoPesquisado();
    
  }),
  it('Test Case 10: Verify Subscription in home page', () => {
    subscription.realizarSubscription(email);
    subscription.validarMensagemSubscription();

  }),
  it('Test Case 15: Place Order: Register before Checkout', () => {
    // Cadastrar Usuario 
    cadastro.iniciarCadastro(nome, 'UsuarioNovo@pgats.com');
    cadastro.preencherCadastro(nome);
    cadastro.validarCadastro(nome);

    // Adicionar produtos ao carrinho
    produto.acessarPaginaDeProdutos();
    produto.pesquisarProduto('Winter Top');
    
    // Clicar em Adicionar o Primeiro Item ao carrinho 
    carrinho.clicarAdiconarAoCarrinho();
    carrinho.clicarContinueShopping();

    // Clicar em Adicionar o Segundo Item ao carrinho 
    carrinho.clicarAdiconarAoCarrinho();
    carrinho.clicarViewCart();

    // Verificar os detalhes do endereço e revisar o pedido  
    carrinho.clicarProceedCheckout();
    carrinho.validarDetalhesEndereco();
    carrinho.validarDetalhesPedido();

    // Inserir uma descrição na área de comentários e clicar em 'Place Order'
    carrinho.inserirComentario();
    carrinho.clicarPlaceOrder();

    // Inserir os detalhes de pagamento: Nome no Cartão, Número do Cartão, CVC, Data de Expiração
    pagamento.realizarPagamento();
    
    // Validar informações do Pedido realizado 
    pagamento.validarInformacoesPedidoRealizado();
    
    // Verificar a mensagem de sucesso 'Your order has been placed successfully!'
    //pagamento.validarMensagemPagamentoSucesso();
    
    // Deletar Usuário  
    cadastro.deletarUsuario();
            
  }),
  it('Test Case 16: Place Order: Login before Checkout', () => {
    // Realizar login 
    login.realizarLogin(email, senha);
    login.validarMensagemLoginSucesso(nome);

    // Adicionar produtos ao carrinho
    produto.acessarPaginaDeProdutos();
    produto.pesquisarProduto('Winter Top');
    
    // Clicar em Adicionar o Primeiro Item ao carrinho 
    carrinho.clicarAdiconarAoCarrinho();
    carrinho.clicarContinueShopping();

    // Clicar em Adicionar o Segundo Item ao carrinho 
    carrinho.clicarAdiconarAoCarrinho();
    carrinho.clicarViewCart();

    // Verificar os detalhes do endereço e revisar o pedido  
    carrinho.clicarProceedCheckout();
    carrinho.validarDetalhesEndereco();
    carrinho.validarDetalhesPedido();

    // Inserir uma descrição na área de comentários e clicar em 'Place Order'
    carrinho.inserirComentario();
    carrinho.clicarPlaceOrder();

    // Inserir os detalhes de pagamento: Nome no Cartão, Número do Cartão, CVC, Data de Expiração
    pagamento.realizarPagamento();
    
    // Validar informações do Pedido realizado 
    pagamento.validarInformacoesPedidoRealizado();

    // Verificar a mensagem de sucesso 'Your order has been placed successfully!'
    //pagamento.validarMensagemPagamentoSucesso();

    // Deletar Usuário
    cadastro.deletarUsuario();
    
  })

})

