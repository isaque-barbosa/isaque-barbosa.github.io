+++
title = "Gerenciamento de Estado e Programação Reativa no Angular"
description = "Uma visão geral sobre as abordagens de gerenciamento de estado e programação reativa no Angular, incluindo Redux, NgRx, RxJS e Signals."
date = 2024-09-15
draft = false

[taxonomies]
tags = ["Technology", "Redux", "NgRx", "RxJs", "Angular", "Signal"]
+++

## Introdução
É necessário o uso de bibliotecas de gerenciamento de estado em projetos que utilizam Angular? Por via de regra, não, mas há exceções. Dependendo da complexidade do projeto e das necessidades específicas de gerenciamento de estado, o uso desse tipo de bibliotecas pode ser necessário.

## Gerenciamento de Estado
A biblioteca mais popular para gerenciamento de estado é o Redux, amplamente utilizada no React. Atualmente, existem variações do Redux em outros frameworks, como o Vuex para o Vue e o NgRx para o Angular. Essas bibliotecas ajudam a centralizar e gerenciar o estado da aplicação. No caso do Angular, isso pode adicionar complexidade e burocracia desnecessárias, considerando que o próprio Angular já possui sua biblioteca nativa (RxJS), que resolveria a maioria dos problemas. Um caso em que a utilização de gerenciamento de estado seria necessária é em micro frontends, para compartilhar informações entre os frontends particionados na tela, já que eles compartilhariam o mesmo estado.

{{ img(src="Global_Store_Dispatch.png" class="ci b1" alt="Desenho de um fluxo de gerenciamento de estado onde 3 micro frontends interagem com uma global store" caption="Exemplificação de Gerenciamento de Estado em um ambiente de Micro Frontends" link="https://github.com/microsoft/redux-micro-frontend?tab=readme-ov-file") }}

## Programação Reativa
Inicialmente, no Angular 2+, a forma nativa de manipular objetos de forma dinâmica era utilizando programação reativa. A biblioteca mais comum para isso é o RxJS. Com RxJS, é possível criar fluxos de dados assíncronos e reagir a eventos de forma eficiente, utilizando observables e operators. No entanto, há certos problemas nessa abordagem, como a sobrecarga de observadores pelos componentes para garantir que as mudanças necessárias estão refletidas na visão do usuário. O mau uso das observables pode causar problemas de vazamento de memória e, consequentemente, quebrar a página. Outra preocupação recorrente é a invocação correta das observables durante os ciclos de vida dos componentes, o que pode ser complexo e propenso a erros. <br>

>Um exemplo muito comum de problemas com observables é quando a página é renderizada, mas quebra acusando que os elementos provenientes de uma chamada HTTP estão undefined. Isso acontece porque, no ciclo de vida da renderização do componente, a informação vinda da observable ainda não chegou para complementar as variáveis utilizadas na página.

## Signals
As novas versões do Angular, a partir da versão 16, contam com um recurso de gerenciamento de estado nativo e mais inteligente, desenhado especificamente para o framework. Signals oferecem uma maneira mais simples e direta de rastrear e reagir a mudanças de estado, sem a complexidade adicional de uma biblioteca reativa completa. Eles também são mais eficientes na transmissão de informações e na prevenção de vazamentos de memória.

## Conclusão
De modo geral, eu não aconselharia a abordagem usando State, Actions e Reducers, normalmente utilizada com Redux ou NgRX, pois adiciona complexidade desnecessária. Na maioria dos casos, é possível resolver usando apenas RxJs ou Signals, aliados a services e properties(como Input e Output).
