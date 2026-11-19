import LoginPage from '../support/pages/login.page';
import CatalogoPage from '../support/pages/catalogo.page';
import CheckoutPage from '../support/pages/checkout.page';

import listaDeCompradores from '../fixtures/compradoresInvalidos.json';

describe('Fluxo de Erro e Cenários Negativos', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve exibir uma mensagem de erro ao tentar logar com usuário bloqueado', () => {
        cy.login('locked_out_user', 'secret_sauce');

        // Asserção dupla para garantir tanto a visibilidade do alerta quanto o seu contexto
        LoginPage.alertaDeErro()
            .should('be.visible')
            .and('contain.text', 'locked out');
    });
    
    // Cria um teste dinâmico para cada objeto da fixture
    listaDeCompradores.forEach((dados) => {
        
        // O título de cada teste muda dinamicamente puxando o nome do cenário da fixture
        it(`Deve barrar o checkout com dados incompletos - Cenário: ${dados.cenario}`, () => {
            cy.login('standard_user', 'secret_sauce');
            CatalogoPage.adicionarItem('sauce-labs-backpack');
            CatalogoPage.irParaCarrinho();
            CheckoutPage.iniciarCheckout();
            CheckoutPage.inserirDados(dados.nome, dados.sobrenome, dados.cep);

            // Valida se o sistema barra a finalização de compra por compradores inválidos 
            // (que possuem dados incompletos) e se o alerta de erro aparece como esperado. 
            cy.url().should('not.include', 'checkout-step-two.html');
            CheckoutPage.alertaDeErro().should('be.visible'); 
        });
    });
});