class CatalogoPage {

    // Aplica variável dinâmica para reaproveitar a parte fixa comum a todos os seletores CSS de botões 
    // "add to car". Isso permite o uso desse único método para testar a adição de qualquer produto da 
    // loja ao carrinho apenas inserindo como parâmetro seu respectivo nome ao chamar o método.
    adicionarItem(nomeDoProduto){
        cy.get(`[data-test="add-to-cart-${nomeDoProduto}"]`).click();
    }

    irParaCarrinho(){
        cy.get('.shopping_cart_link').click();
    }
}

export default new CatalogoPage();