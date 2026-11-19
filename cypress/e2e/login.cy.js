import LoginPage from "../support/pages/login.page";

describe('Validação de Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve exibir uma mensagem de erro ao logar com senha incorreta', () => {
    // O "cy.login()" é um Custom Command definido em "support/commands.js" 
    // que foi criado com o intuito de ser reaproveitado em vários testes.
    cy.login('standard_user', 'wrong_password');

    // Executa a seguinte validação dupla no alerta de erro:
    LoginPage.alertaDeErro()
    .should('be.visible') // Garante que o alerta não está invisível ou escondido pelo CSS.
    
    // Garante que o contexto da mensagem ('Epic sadface: Username and password 
    // do not match any user in this service') está correto em seu núcleo ('do not match') 
    // mesmo que haja alguma variação futura na escrita dos demais termos presentes nela.
    .and('contain.text', 'do not match'); 
  });
});