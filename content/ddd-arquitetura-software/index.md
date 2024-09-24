+++
title = "DDD as Software Architecture"
description = "Is DDD an Architecture? After all, what is an Architecture?"
date = 2024-09-24 
draft = false

[taxonomies]
tags = ["Tech", "Architecture", "Software", "DDD", "Domain"]
+++

## Introduction
During my journey, I have witnessed a few times, if not many, people presenting or selling Domain Driven Design as Software Architecture. Hence the reason for this post: Is DDD an Architecture? After all, what is an Architecture? This term is often used to glamorize and sell courses, or worse, to create hypes.

## What is DDD?
DDD, also known as Domain Driven Design, became very popular with Eric Evans' book [[1]](#1). In the book, Eric presents an approach to software development that emphasizes creating a rich domain model to solve problems. In other words, the main emphasis should be on business logic and how it is represented in the code.

## What is Software Architecture?
This is a point I find super interesting. You will find different definitions, but regardless, there is always a certain consensus, a common point. I will bring here some definitions that better translate this.

> Software architecture is an abstraction of the runtime elements of a software system during a phase of its operation. A system can be composed of multiple levels of abstraction and multiple phases of operation, each with its own software architecture. A software architecture is defined by a configuration of architectural elements - components, connectors, and data - constrained in their relationships to achieve a desired set of architectural properties. [[2]](#2)

> Architecture is about the important stuff... Whatever that is. — Ralph Johnson [[3]](#3)

> Software architecture can be defined as the structure of the system, combined with the architectural characteristics ("-ilities") that the system must support, architectural decisions, and finally, design principles. [[3]](#3)

> A more common definition considers that architecture is concerned with design at a higher level. That is, the focus shifts from the organization and interfaces of individual classes to larger units, whether packages, components, modules, subsystems, layers, or services. [[4]](#4)

## Is DDD Architecture or Software Design?
DDD, in itself, does not configure as Software Architecture, but rather as a design approach that strongly influences architectural decisions. Its emphasis on domain modeling, ubiquitous language, and isolation of business logic contributes to creating more flexible, maintainable systems that are faithful to business requirements. It is possible to implement DDD in conjunction with different architectural styles, such as the Modular Monolith, where the modularity of the monolith would be divided into the identified domains for the system.

## Conclusion
DDD does not configure as Software Architecture, but rather as a design approach that can influence architectural decisions. While Software Architecture is concerned with the structure of the system at a macro level, including components, services, and their interactions, DDD focuses on domain modeling and business logic. DDD provides a set of practices and concepts that help create more flexible and maintainable systems, but it does not define the overall structure of the system. Therefore, DDD should be seen as a design approach that complements architecture, but not architecture itself.

---
<a id="1">[1]</a> [Eric Evans, Domain Driven Design: Atacando as Complexidades no Coração do Software](https://www.amazon.com.br/Domain-Driven-Design-Tackling-Complexity-Software-ebook/dp/B00794TAUG/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-2)
<br />
<a id="2">[2]</a> [Architectural Styles and
the Design of Network-based Software Architectures](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm)
<br />
<a id="3">[3]</a> [Fundamentals of Software Architecture: An Engineering Approach](https://www.amazon.com.br/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1)
<br />
<a id="4">[4]</a> [Engenharia de Software Moderna](https://www.amazon.com.br/Engenharia-Software-Moderna-Marco-Valente/dp/6500019504/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9)