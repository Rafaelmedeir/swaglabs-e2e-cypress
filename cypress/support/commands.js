import LoginPage from "./pages/login.page";

// Agrupa o preenchimento de dados de acesso e o clique num único método, permitindo o 
// reaproveitamento desse fluxo em qualquer teste que precisar fazer login.
Cypress.Commands.add('login', (usuario, senha) => {
  LoginPage.preencherUsuario(usuario);
  LoginPage.preencherSenha(senha);
  LoginPage.clicarLogin();
});
