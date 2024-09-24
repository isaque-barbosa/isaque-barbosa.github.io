+++
title = "DDD como Arquitectura de Software"
description = "¿Es DDD una Arquitectura? Al fin y al cabo, ¿qué es una Arquitectura?"
date = 2024-09-24 
draft = false

[taxonomies]
tags = ["Tech", "Architecture", "Software", "DDD", "Domain"]
+++

## Introducción
Durante mi trayectoria, he presenciado algunas veces, si no muchas, personas presentando o vendiendo el Domain Driven Design como una Arquitectura de Software. De ahí viene el motivo de este post: ¿es DDD una Arquitectura? Al fin y al cabo, ¿qué es una Arquitectura? Este término se usa mucho para glamorizar y vender cursos, o peor, para crear hypes.

## ¿Qué es DDD?
DDD, también conocido como Domain Driven Design - o Diseño Guiado por el Dominio -, se hizo muy popular con el libro de Eric Evans [[1]](#1). En el libro, Eric presenta un enfoque para el desarrollo de software que enfatiza la creación de un modelo de dominio rico para la resolución de problemas. Es decir, el énfasis principal debe estar en la lógica de negocios y en cómo se representa en el código.

## ¿Qué es Arquitectura de Software?
Este es un punto que encuentro súper interesante. Encontrarás diferentes definiciones, pero, independientemente de eso, siempre hay un cierto consenso, un punto común. Traeré aquí algunas definiciones que traducen esto mejor.

> Una arquitectura de software es una abstracción de los elementos de tiempo de ejecución de un sistema de software durante una fase de su operación. Un sistema puede estar compuesto por varios niveles de abstracción y varias fases de operación, cada una con su propia arquitectura de software. Una arquitectura de software se define por una configuración de elementos arquitectónicos - componentes, conectores y datos - restringidos en sus relaciones, con el fin de lograr un conjunto deseado de propiedades arquitectónicas. [[2]](#2)

> La arquitectura trata sobre las cosas importantes... Lo que sea que eso signifique. — Ralph Johnson [[3]](#3)

> La arquitectura de software puede definirse como la estructura del sistema, combinada con las características de la arquitectura ("-ilidades") que el sistema debe soportar, decisiones de arquitectura y, finalmente, principios de diseño. [[3]](#3)

> Una definición más común considera que la arquitectura se preocupa por el diseño a un nivel más alto. Es decir, el enfoque deja de ser la organización y las interfaces de clases individuales y pasa a ser en unidades más grandes, ya sean paquetes, componentes, módulos, subsistemas, capas o servicios. [[4]](#4)

## ¿Es DDD Arquitectura o Diseño de Software?
DDD, en sí mismo, no se configura como una Arquitectura de Software, sino como un enfoque de diseño que influye fuertemente en las decisiones arquitectónicas. Su énfasis en la modelación del dominio, en el lenguaje ubicuo y en el aislamiento de la lógica de negocio contribuye a la creación de sistemas más flexibles, mantenibles y fieles a los requisitos del negocio. Es posible implementar DDD junto con diferentes estilos arquitectónicos, como el Monolito Modular, donde la modularidad del monolito se dividiría en los dominios identificados para el sistema.

## Conclusión
DDD no se configura como una Arquitectura de Software, sino como un enfoque de diseño que puede influir en las decisiones arquitectónicas. Mientras que la Arquitectura de Software se preocupa por la estructura del sistema a un nivel macro, incluyendo componentes, servicios y sus interacciones, DDD se enfoca en la modelación del dominio y la lógica de negocios. DDD proporciona un conjunto de prácticas y conceptos que ayudan a crear sistemas más flexibles y mantenibles, pero no define la estructura global del sistema. Por lo tanto, DDD debe verse como un enfoque de diseño que complementa la arquitectura, pero no como la arquitectura en sí.

---
<a id="1">[1]</a> [Eric Evans, Domain Driven Design: Atacando as Complexidades no Coração do Software](https://www.amazon.com.br/Domain-Driven-Design-Tackling-Complexity-Software-ebook/dp/B00794TAUG/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-2)
<br />
<a id="2">[2]</a> [Architectural Styles and
the Design of Network-based Software Architectures](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm)
<br />
<a id="3">[3]</a> [Fundamentals of Software Architecture: An Engineering Approach](https://www.amazon.com.br/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1)
<br />
<a id="4">[4]</a> [Engenharia de Software Moderna](https://www.amazon.com.br/Engenharia-Software-Moderna-Marco-Valente/dp/6500019504/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9)