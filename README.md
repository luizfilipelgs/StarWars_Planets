# Boas-vindas ao repositório do projeto Star Wars Planets Search!

![img](projectIntro.gif)

Link Deploy: https://luizfilipelgs.github.io/StarWars_Planets

## O que foi desenvolvido 👨‍💻 

  Neste projeto criei uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais como:  useState, useContext, useEffect e Hooks customizados. 

  Nesse projeto utilizei:

  - React.js

  - Componentes Funcionais e Hooks

  - Context API

  - Jest para testes
  
## Instruções para rodar o projeto <a name="instrucoes"></a>

     
  - Clone o repositório com o comando **git clone**:
  
        git clone git@github.com:luizfilipelgs/StarWars_Planets.git
  
  - Entre no diretório que acabou de criar:

        cd StarWars_Planets
        
  - Para o projeto funcionar na sua máquia, será necessário instalar suas dependências, para isso, utilize **npm install**:

        npm install

## Orientações

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do seu código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento nós utilizamos neste projeto o linter `ESLint` e o `Stylelint`. Para rodar o linter localmente em seu projeto, execute o comando abaixo:

  ```bash
  npm run lint
  npm run lint:styles
  ```
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

* <details><summary><b> Execução de testes de requisito</b></summary>

  Os testes deste projeto foram feitos utilizando o [Cypress](https://www.cypress.io/how-it-works/). É utilizada nos testes a resolução `1366 x 768` (1366 pixels de largura por 768 pixels de altura) para testes de layout. Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração dessa resolução, por exemplo.

  Para o projeto ser validado, todos os testes de comportamento devem passar. É possível testar isso local rodando `npm run cy`. Esse comando roda a suite de testes do Cypress que valida se o fluxo geral e os requisitos funcionais estão funcionando como deveriam. Você pode também executar o comando `npm run cy:open` para ter um resultado visual dos testes executados.

  Esses testes não consideram o layout de maneira geral, mas sim os atributos e informações corretas, então preste atenção nisso! Os testes te darão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉
  </details>

* <details><summary><b> Execução de um teste específico</b></summary>

  Para executar somente uma `spec` de testes, você pode selecionar qual delas você deseja após executar o comando `npm run cy:open`. Além disto você pode rodar todas as `specs` clicando no botão `Run all specs`.

  ![img](./cypress-specs.jpeg)

  **Atenção:** Sua aplicação deve estar rodando para o Cypress no terminal poder testar.
  </details>

* <details><summary><b> Execução de teste de cobertura</b></summary>

  Alguns requisitos irão pedir para que você desenvolva testes para sua aplicação. Esses testes serão avaliados através da cobertura de testes.

  É possível verificar o percentual da cobertura de testes com o comando `npm run test-coverage`.

  Você também pode executar `npm run test-coverage -- --collectCoverageFrom=caminho/da/Pagina` para verificar o percentual de cobertura de testes de cada 'Pagina'. Por exemplo, para verificar a cobertura de testes da página de `Login`, execute o comando `npm run test-coverage -- --collectCoverageFrom=src/pages/Login.js`.
  </details><br />
</details>

