class LoginPage {
    preencherUsuario(usuario){
        cy.get('[data-test="username"]').type(usuario);
    }
    preencherSenha(senha){
        cy.get('[data-test="password"]').type(senha);
    }
    clicarLogin(){
        cy.get('[data-test="login-button"]').click();
    }

    // Retorna o alerta de erro para validações nos testes.
    alertaDeErro(){
        return cy.get('[data-test="error"]');
    }
}

export default new LoginPage();
