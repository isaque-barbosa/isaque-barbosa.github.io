+++
title = "DDD 作为软件架构"
description = "DDD 是一种架构吗？毕竟，什么是架构？"
date = 2024-09-24 
draft = false

[taxonomies]
tags = ["Tech", "Architecture", "Software", "DDD", "Domain"]
+++

## 介绍
在我的职业生涯中，我曾多次看到人们将领域驱动设计（Domain Driven Design，简称 DDD）作为软件架构来介绍或销售。因此，这篇文章的目的就是：DDD 是一种架构吗？毕竟，什么是架构？这个术语经常被用来美化和销售课程，或者更糟糕的是，制造炒作。

## 什么是 DDD？
DDD，也被称为领域驱动设计，随着 Eric Evans 的书籍而变得非常流行 [[1]](#1)。在书中，Eric 提出了一种软件开发方法，强调创建一个丰富的领域模型来解决问题。换句话说，主要强调的是业务逻辑及其在代码中的表示方式。

## 什么是软件架构？
这是我觉得非常有趣的一点。你会发现不同的定义，但无论如何，总是有一定的共识，一个共同点。我将在这里带来一些更好地翻译这一点的定义。

> 软件架构是软件系统在其运行阶段的运行时元素的抽象。一个系统可以由多个抽象层次和多个运行阶段组成，每个阶段都有其自己的软件架构。软件架构由一组受限于其关系的架构元素——组件、连接器和数据——的配置定义，以实现一组期望的架构属性。 [[2]](#2)

> 架构是关于重要的东西……无论那是什么。 — Ralph Johnson [[3]](#3)

> 软件架构可以定义为系统的结构，结合系统必须支持的架构特性（“ -ilities”），架构决策，最后是设计原则。 [[3]](#3)

> 更常见的定义认为，架构关注的是更高层次的设计。也就是说，重点从单个类的组织和接口转移到更大的单元，无论是包、组件、模块、子系统、层还是服务。 [[4]](#4)

## DDD 是架构还是软件设计？
DDD 本身并不构成软件架构，而是一种强烈影响架构决策的设计方法。它对领域建模、通用语言和业务逻辑隔离的强调，有助于创建更灵活、可维护且符合业务需求的系统。可以将 DDD 与不同的架构风格结合实施，例如模块化单体架构，其中单体的模块化将划分为系统识别的领域。

## 结论
DDD 本身并不构成软件架构，而是一种可以影响架构决策的设计方法。虽然软件架构关注的是系统的宏观结构，包括组件、服务及其交互，但 DDD 关注的是领域建模和业务逻辑。DDD 提供了一套帮助创建更灵活和可维护系统的实践和概念，但它不定义系统的整体结构。因此，DDD 应被视为一种补充架构的设计方法，而不是架构本身。

---
<a id="1">[1]</a> [Eric Evans, Domain Driven Design: Atacando as Complexidades no Coração do Software](https://www.amazon.com.br/Domain-Driven-Design-Tackling-Complexity-Software-ebook/dp/B00794TAUG/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-2)
<br />
<a id="2">[2]</a> [Architectural Styles and
the Design of Network-based Software Architectures](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm)
<br />
<a id="3">[3]</a> [Fundamentals of Software Architecture: An Engineering Approach](https://www.amazon.com.br/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1)
<br />
<a id="4">[4]</a> [Engenharia de Software Moderna](https://www.amazon.com.br/Engenharia-Software-Moderna-Marco-Valente/dp/6500019504/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9)