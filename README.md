## Pedidos App – Frontend 
Interface web desenvolvida em Angular para o gerenciamento de pedidos, produtos e pagamentos. O projeto utiliza Angular Material para componentes de UI e Tailwind CSS para estilização utilitária.


## Como executar o projeto
Pré-requisitos:

* Node.js (versão 18 ou superior)
* Angular CLI
* Backend em execução: A aplicação frontend espera que o backend esteja rodando em http://localhost:8080.

## Passo a passo:

Instalar as dependências:

* Bash
> npm install

Executar o projeto:

* Bash
> npm start
* Ou utilize ng serve para o servidor de desenvolvimento.

Acessar a aplicação: 
* Abra o navegador em 
> http://localhost:4200.

## Estrutura principal do projeto
O código segue uma organização modular baseada em componentes standalone e serviços:



* src/app/pages/ → Componentes de página (Listagem de pedidos, criação, detalhes e pagamentos) .


* src/app/services/ → Serviços para comunicação com a API via HttpClient.




* src/app/models/ → Interfaces TypeScript que definem a estrutura dos dados (Order, Product, Payment).



* src/app/layout/ → Estrutura global da aplicação, incluindo a barra lateral (Sidenav) e o cabeçalho .


* src/environments/ → Configurações de ambiente, como a URL da API.

## Funcionalidades Principais
* Listagem de Produtos: Visualização do catálogo de produtos ativos vindos do backend.


* Gestão de Pedidos: * Visualização de todos os pedidos realizados.


* Criação de novos pedidos com seleção dinâmica de produtos e cálculo de total em tempo real.



* Consulta detalhada de um pedido específico, exibindo itens e status.


* Pagamentos: Registro de novos pagamentos (PIX, Cartão de Crédito, Débito ou Dinheiro) para pedidos existentes.


* Cálculo automático de saldo restante na tela de detalhes.

## Tecnologias Utilizadas
* Angular 18/19: Framework principal (Standalone components).


* Angular Material: Componentes de interface como Cards, Forms e Sidenav.



* Tailwind CSS: Framework de CSS para layout responsivo e espaçamentos.


* TypeScript: Tipagem forte para maior segurança no desenvolvimento.




## Observações importantes
* Responsividade: O layout utiliza mat-sidenav com modo side e classes do Tailwind para se adaptar a diferentes tamanhos de tela.


* Comunicação API: Todas as chamadas ao backend são feitas através de serviços injetáveis que utilizam o HttpClient do Angular.


