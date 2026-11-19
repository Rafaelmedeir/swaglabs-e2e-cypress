import LoginPage from '../support/pages/login.page';
import CatalogoPage from '../support/pages/catalogo.page';
import CheckoutPage from '../support/pages/checkout.page';

import compradorValido from '../fixtures/compradorValido.json';

describe('Jornada de Checkout', () => {

    it('Deve validar o fluxo de compra no cenário positivo ', () => {
        
        // Simulção inicial com as ações de logar, colocar um item no carrinho e ir pro checkout
        cy.visit('/');
        cy.login('standard_user', 'secret_sauce');
        CatalogoPage.adicionarItem('sauce-labs-backpack');
        CatalogoPage.irParaCarrinho();
        CheckoutPage.iniciarCheckout();

        //Consome os dados da fixture e finaliza a compra
        CheckoutPage.inserirDados(compradorValido.nome, compradorValido.sobrenome, compradorValido.cep);
            CheckoutPage.finalizarPedido();
            //Verifica se a mensagem de compra bem sucedida apareceu como esperado
            CheckoutPage.mensagemSucesso().should('be.visible');

    });
});