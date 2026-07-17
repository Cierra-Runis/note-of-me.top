---
date: '2026-05-31T17:34:56+09:00'
id: AEBGAK
---

# Nuxt and Vue Usage Report

The usage report series has reached [Nuxt](https://nuxt.com) and [Vue.js](https://vuejs.org) at last! Let me talk a little about my experience and how it compares with [Next.js and React](./NextJs-And-React-Report.md).

## Vue

Vue separates the code into `<template>` and `<script>`, unlike React's JSX/TSX approach, where everything is written directly inside JavaScript/TypeScript files. To support this style, Vue created the separate `.vue` file format.

Let me start with the advantages of `<template>`. When using component libraries such as [Nuxt UI](https://ui.nuxt.com), the slot syntax like `<template header>` is extremely convenient for layout work. By contrast, React usually needs CSS to achieve similar layouts, and CSS is something I still struggle to understand.

I also want to complain a bit about the developer tools in Edge and Chrome. When debugging CSS issues, they are honestly quite poor. If a certain element's style does not apply, they only grey it out, but never tell you why. I have heard Firefox's devtools are better, though I have not used them myself.

The `<script>` part is pretty similar to React. It is JavaScript/TypeScript code, and state management works in much the same way. Many modern frontend frameworks are moving toward functional components and Hooks, and Vue is no exception. Still, combining things can lead to problems such as repeated renders or infinite loops. In two projects from the same company that I recently worked on, saving with <KbdGroup><kbd>Ctrl</kbd> + <kbd>S</kbd></KbdGroup> caused hot reloaded pages to lose state and become unable to send HTTP requests to the backend. My rough guess is that some state was kept inside a component, and hot reload reset that component's state, which in turn caused the whole page state to disappear.

There is also the `<style>` section, but I do not think that is a good approach. I still believe styles should stay as close to components as possible, which is why I prefer something like Tailwind CSS, where styles are written directly in `<template>`.

Now for the complaints.

First, component props are usually defined in `defineProps` inside `<script>`. IDEs can provide hints, but if you are just reading the source, you still have to find the `defineProps` section before you know what props the component actually accepts. This gets especially annoying when the component code is long, because you keep scrolling back and forth.

Second, Vue itself still requires importing components, although many projects use auto-import solutions such as Nuxt or various component auto-registration plugins. That does let you write component names directly in templates without manual `import`s, but the tradeoff is that component names are often tightly tied to file names and directory structure. Renaming a component usually means renaming the file as well, and name conflicts often have to be solved by changing file names or directory layout. By comparison, React leans more toward explicit imports and exports, so component names are less tightly coupled to file names and tend to be more flexible during refactoring.

## Nuxt

What a great framework. I like it a lot. It is very similar to Next.js, so I will not repeat all the usual praise.

But I do want to talk more about its module system. Nuxt has a very powerful module system, with many official and third-party modules that make it easy to integrate features such as authentication, internationalization, PWA support, and more. Next.js does not really have an ecosystem like that.

As for its [Nuxt Content](https://content.nuxt.com/) module, that is the part that really impressed me. In Next.js, you still need to combine something like [Contentlayer](https://contentlayer.dev) from a third party to achieve similar functionality. To be clear, the official framework does support SSG, but it does not provide a dedicated content management system for handling Markdown files and similar content resources.

The blog on [note-of-me.top](https://note-of-me.top) currently uses VitePress, but if I ever want to build something similar to the blog from my Next.js era, Nuxt Content will definitely be my next choice. Of course, that will make the overall complexity go up quite a bit ((.

## Summary

Not bad at all. Far better than I expected.

Congratulations, then, to Nuxt for becoming my favorite frontend framework, or at least tied for first place with Next.js!
