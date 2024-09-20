+++
title = "Gestión de Estado y Programación Reactiva en Angular"
description = "Una visión general sobre los enfoques de gestión de estado y programación reactiva en Angular, incluyendo Redux, NgRx, RxJS y Signals."
date = 2024-09-15
draft = false

[taxonomies]
tags = ["Technology", "Redux", "NgRx", "RxJs", "Angular", "Signal"]
+++

## Introducción
¿Es necesario el uso de bibliotecas de gestión de estado en proyectos que utilizan Angular? Como regla general, no, pero hay excepciones. Dependiendo de la complejidad del proyecto y de las necesidades específicas de gestión de estado, el uso de este tipo de bibliotecas puede ser necesario.

## Gestión de Estado
La biblioteca más popular para la gestión de estado es Redux, ampliamente utilizada en React. Actualmente, existen variaciones de Redux en otros frameworks, como Vuex para Vue y NgRx para Angular. Estas bibliotecas ayudan a centralizar y gestionar el estado de la aplicación. En el caso de Angular, esto puede añadir complejidad y burocracia innecesarias, considerando que el propio Angular ya tiene su biblioteca nativa (RxJS), que resolvería la mayoría de los problemas. Un caso en el que la utilización de gestión de estado sería necesaria es en micro frontends, para compartir información entre los frontends particionados en la pantalla, ya que compartirían el mismo estado.

{{ img(src="Global_Store_Dispatch.png" class="ci b1" alt="Diagrama de un flujo de gestión de estado donde 3 micro frontends interactúan con una tienda global" caption="Ejemplo de Gestión de Estado en un entorno de Micro Frontends" link="https://github.com/microsoft/redux-micro-frontend?tab=readme-ov-file") }}

## Programación Reactiva
Inicialmente, en Angular 2+, la forma nativa de manipular objetos de forma dinámica era utilizando programación reactiva. La biblioteca más común para esto es RxJS. Con RxJS, es posible crear flujos de datos asíncronos y reaccionar a eventos de forma eficiente, utilizando observables y operadores. Sin embargo, hay ciertos problemas en este enfoque, como la sobrecarga de observadores por los componentes para asegurar que los cambios necesarios se reflejen en la vista del usuario. El mal uso de los observables puede causar problemas de fuga de memoria y, en consecuencia, romper la página. Otra preocupación recurrente es la invocación correcta de los observables durante los ciclos de vida de los componentes, lo que puede ser complejo y propenso a errores.

>Un ejemplo muy común de problemas con observables es cuando la página se renderiza, pero se rompe indicando que los elementos provenientes de una llamada HTTP están indefinidos. Esto sucede porque, en el ciclo de vida de la renderización del componente, la información proveniente del observable aún no ha llegado para complementar las variables utilizadas en la página.

## Signals
Las nuevas versiones de Angular, a partir de la versión 16, cuentan con un recurso de gestión de estado nativo y más inteligente, diseñado específicamente para el framework. Signals ofrecen una manera más simple y directa de rastrear y reaccionar a los cambios de estado, sin la complejidad adicional de una biblioteca reactiva completa. También son más eficientes en la transmisión de información y en la prevención de fugas de memoria.

## Conclusión
En general, no recomendaría el enfoque utilizando State, Actions y Reducers, normalmente utilizado con Redux o NgRX, ya que añade complejidad innecesaria. En la mayoría de los casos, es posible resolver usando solo RxJs o Signals, combinados con servicios y propiedades (como Input y Output).
