class CheckoutPage{
    iniciarCheckout(){
        cy.get('[data-test="checkout"]').click();
    }

    // Preenche os dados do comprador. Utiliza condicionais (if) para permitir testar cenários
    // onde algum dos campos é deixado em branco ou não recebe os valores passados como input, 
    // tornando o método flexível.
    inserirDados(nome, sobrenome, cep){
        if (nome) {
            cy.get('[data-test="firstName"]').type(nome).should('have.value', nome);
        }
        if (sobrenome) {
            cy.get('[data-test="lastName"]').type(sobrenome).should('have.value', sobrenome);
        }
        if (cep) {
            cy.get('[data-test="postalCode"]').type(cep).should('have.value', cep);
        }
        cy.get('[data-test="continue"]').click();
    }

    finalizarPedido(){
        cy.get('[data-test="finish"]').click();
    }

    // Captura o elemento HTML da mensagem de sucesso permitindo testar sua visibilidade
    mensagemSucesso(){
        return cy.get('.complete-header').as('Mensagem de compra bem sucedida');
    }

    // Captura o seletor de testes do alerta de erro para verificar seu comportamentos em meio a cenários negativos. 
    alertaDeErro() {
        return cy.get('[data-test="error"]');
    }
}

export default new CheckoutPage();