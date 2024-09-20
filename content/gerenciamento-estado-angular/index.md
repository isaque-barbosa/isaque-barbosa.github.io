+++
title = "State Management and Reactive Programming in Angular"
description = "An overview of state management and reactive programming approaches in Angular, including Redux, NgRx, RxJS, and Signals."
date = 2024-09-15
draft = false

[taxonomies]
tags = ["Technology", "Redux", "NgRx", "RxJs", "Angular", "Signal"]
+++

## Introduction
Is it necessary to use state management libraries in projects that use Angular? As a rule, no, but there are exceptions. Depending on the complexity of the project and the specific state management needs, the use of such libraries may be necessary.

## State Management
The most popular library for state management is Redux, widely used in React. Currently, there are variations of Redux in other frameworks, such as Vuex for Vue and NgRx for Angular. These libraries help centralize and manage the application's state. In the case of Angular, this can add unnecessary complexity and bureaucracy, considering that Angular itself already has its native library (RxJS), which would solve most problems. One case where the use of state management would be necessary is in micro frontends, to share information between the partitioned frontends on the screen, as they would share the same state.

{{ img(src="Global_Store_Dispatch.png" class="ci b1" alt="Diagram of a state management flow where 3 micro frontends interact with a global store" caption="Example of State Management in a Micro Frontends environment" link="https://github.com/microsoft/redux-micro-frontend?tab=readme-ov-file") }}

## Reactive Programming
Initially, in Angular 2+, the native way to dynamically manipulate objects was using reactive programming. The most common library for this is RxJS. With RxJS, it is possible to create asynchronous data streams and react to events efficiently, using observables and operators. However, there are certain problems with this approach, such as the overload of observers by components to ensure that the necessary changes are reflected in the user's view. Misuse of observables can cause memory leak issues and, consequently, break the page. Another recurring concern is the correct invocation of observables during the component lifecycle, which can be complex and error-prone.

>A very common example of problems with observables is when the page is rendered but breaks, indicating that the elements from an HTTP call are undefined. This happens because, in the component's rendering lifecycle, the information from the observable has not yet arrived to complement the variables used on the page.

## Signals
The new versions of Angular, starting from version 16, feature a native and more intelligent state management resource, specifically designed for the framework. Signals offer a simpler and more direct way to track and react to state changes, without the additional complexity of a complete reactive library. They are also more efficient in transmitting information and preventing memory leaks.

## Conclusion
In general, I would not recommend the approach using State, Actions, and Reducers, normally used with Redux or NgRX, as it adds unnecessary complexity. In most cases, it is possible to resolve using only RxJs or Signals, combined with services and properties (such as Input and Output).
