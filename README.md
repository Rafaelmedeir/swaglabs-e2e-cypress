# Automação de Testes E2E com Cypress - Swag Labs

## Sobre o Projeto

Construí este projeto para aplicar meus conhecimentos em automação e os conceitos de Qualidade de Software na prática, automatizando o fluxo de um e-commerce (Sauce Demo) com foco em código limpo, reaproveitamento estrutural e integração contínua.

## Tecnologias e Ferramentas

- **Linguagem:** JavaScript
- **Framework:** Cypress
- **Integração Contínua (CI):** GitHub Actions
- **Relatórios:** Mochawesome Reporter

Obs sobre as credenciais: Como o Sauce Demo é um site público de estudos, as senhas estão explícitas direto no código propositalmente com o objetivo de facilitar a clonagem e execução do repositório, que tem fins exclusivamente demonstrativos. Num projeto real de mercado, para não subir nenhuma informação sensível pro GitHub, elas ficariam protegidas por variáveis de ambiente (`cypress.env.json`) dentro do Cypress ou nos próprios Secrets do GitHub Actions para proteger credenciais de acesso, em conformidade com as boas práticas de segurança corporativa.

## Arquitetura e Padrões Aplicados

A estrutura foi desenhada para facilitar a manutenção e escalabilidade dos testes:

- **Page Object Model (POM):** Separação clara entre a lógica de interação (elementos da página) e os testes em si. Os arquivos `login.page`, `catalogo.page` e `checkout.page` isolam os seletores para facilitar alterações futuras.
- **Data-Driven Testing (DDT):** Em vez de duplicar testes para diferentes cenários de erro, utilizo um arquivo JSON (`compradoresInvalidos.json`). Um `.forEach()` itera sobre a massa de dados para gerar testes dinâmicos (Faltando Sobrenome, Faltando CEP).
- **Custom Commands:** Criação de comandos personalizados reutilizáveis no Cypress, como `cy.login()`, que centralizam ações comuns a vários testes.
- **Seletores dinâmicos:** Uso de Template Literals, como `[data-test="add-to-cart-${nomeDoProduto}"]`, para localizar produtos pelo nome, evitando repetição de código.
- **Pipeline CI/CD:** Arquivo de configuração `.github/workflows/cypress.yml` preparado para rodar os testes em modo *headless* a cada novo *push* ou *pull request*.

## Abordagem de Testes

O projeto cobre tanto o fluxo ideal (Caminho Feliz) da jornada de compra, quanto fluxos de exceção, validando se as regras de negócio de campos obrigatórios bloqueiam usuários inválidos corretamente.

## Relatórios de Execução

Os relatórios são gerados via `cypress-mochawesome-reporter`. Eles organizam os resultados em HTML com anexo automático de screenshots sempre que uma asserção falha, facilitando a análise de bugs.

## Como Executar o Projeto Localmente

**1. Clone o repositório e instale as dependências**

```bash
npm install
```

**2. Executar via Terminal (Modo Headless / CI)**

```bash
npx cypress run
```

**3. Executar com Interface Gráfica (Modo Interativo)**

```bash
npx cypress open
```