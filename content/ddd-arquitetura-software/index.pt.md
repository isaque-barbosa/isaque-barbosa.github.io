+++
title = "DDD como Arquitetura de Software"
description = "O DDD é uma Arquitetura? Afinal, o que é uma Arquitetura?"
date = 2024-09-24 
draft = false

[taxonomies]
tags = ["Tech", "Architecture", "Software", "DDD", "Domain"]
+++

## Introdução
Durante a minha trajetória, presenciei algumas vezes, se não muitas, pessoas apresentando ou vendendo o Domain Driven Design como uma Arquitetura de Software. Daí vem o motivo deste post: o DDD é uma Arquitetura? Afinal, o que é uma Arquitetura? Esse termo é muito usado para glamourizar e vender cursos, ou pior, para criar hypes.

## O que é o DDD?
DDD, também conhecido como Domain Driven Design - ou Desenvolvimento Orientado ao Domínio -, se tornou muito popular com o livro de Eric Evans [[1]](#1). No livro, Eric apresenta uma abordagem para o desenvolvimento de software que enfatiza a criação de um modelo rico de domínio para a resolução de problemas. Ou seja, a ênfase principal deve estar na lógica de negócios e na forma como ela é representada no código.

## O que é Arquitetura de Software?
Esse é um ponto que acho super interessante. Você encontrará definições diferentes, mas, independentemente disso, sempre há um certo consenso, um ponto comum. Vou trazer aqui algumas definições que traduzem isso melhor.

> Uma arquitetura de software é uma abstração dos elementos de tempo de execução de um sistema de software durante uma fase da sua operação. Um sistema pode ser composto por vários níveis de abstração e várias fases de operação, cada uma com a sua própria arquitetura de software. Uma arquitetura de software é definida por uma configuração de elementos arquiteturais - componentes, conectores e dados - restringidos nas suas relações, a fim de alcançar um conjunto desejado de propriedades arquiteturais. [[2]](#2)

> Arquitetura é sobre as coisas importantes... O que quer que isso seja. — Ralph Johnson [[3]](#3)

>A arquitetura de software pode ser definida como a estrutura do sistema, combinada com as características da arquitetura ("-ilidades") que o sistema deve suportar, decisões de arquitetura e, finalmente, princípios de design. [[3]](#3)

> Uma definição mais comum considera que a arquitetura se preocupa com o design em um nível mais alto. Ou seja, o foco deixa de ser a organização e as interfaces de classes individuais e passa a ser em unidades maiores, sejam pacotes, componentes, módulos, subsistemas, camadas ou serviços. [[4]](#4)

## O DDD é Arquitetura ou Design de Software?
O DDD, em si, não se configura como uma Arquitetura de Software, mas sim como uma abordagem de design que influencia fortemente as decisões arquiteturais. A sua ênfase na modelagem do domínio, na linguagem ubíqua e no isolamento da lógica de negócio contribui para a criação de sistemas mais flexíveis, manuteníveis e fiéis aos requisitos do negócio. É possível implementar DDD em conjunto com diferentes estilos arquiteturais, como o Modular Monolith, em que a modularidade do monolito seria dividida nos domínios identificados para o sistema.

## Conclusão
O DDD não se configura como uma Arquitetura de Software, mas sim como uma abordagem de design que pode influenciar as decisões arquiteturais. Enquanto a Arquitetura de Software se preocupa com a estrutura do sistema em um nível macro, incluindo componentes, serviços e suas interações, o DDD foca na modelagem do domínio e na lógica de negócios. O DDD fornece um conjunto de práticas e conceitos que ajudam a criar sistemas mais flexíveis e manuteníveis, mas não define a estrutura global do sistema. Portanto, o DDD deve ser visto como uma abordagem de design que complementa a arquitetura, mas não a arquitetura em si.

---
<a id="1">[1]</a> [Eric Evans, Domain Driven Design: Atacando as Complexidades no Coração do Software](https://www.amazon.com.br/Domain-Driven-Design-Tackling-Complexity-Software-ebook/dp/B00794TAUG/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-2)
<br />
<a id="2">[2]</a> [Architectural Styles and
the Design of Network-based Software Architectures](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm)
<br />
<a id="3">[3]</a> [Fundamentals of Software Architecture: An Engineering Approach](https://www.amazon.com.br/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1)
<br />
<a id="4">[4]</a> [Engenharia de Software Moderna](https://www.amazon.com.br/Engenharia-Software-Moderna-Marco-Valente/dp/6500019504/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9)