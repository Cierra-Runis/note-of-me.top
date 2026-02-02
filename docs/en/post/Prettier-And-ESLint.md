---
date: '2025-05-01T22:13:14+08:00'
id: WKQYMU
---

# Prettier and ESLint

## Getting Started

As I was building this website, I was confused about the combined use of [Prettier](https://prettier.io) and [ESLint](https://eslint.org). After researching related materials, I recorded the following in the project's README.md:

### Is Prettier Feature Conflicting with ESLint?

While configuring tools to improve code quality, I was unsure whether I should use Prettier or ESLint for handling the sorting of imports, properties, and Tailwind CSS classes.

Although Prettier plugins like [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) and [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports) can address this, I don't consider them the "best practice".

As discussed in this [GitHub Issue](https://github.com/prettier/prettier/issues/2460) and this [Reddit Post](https://www.reddit.com/r/typescript/comments/15lr8p1/sorting_imports_eslint_vs_prettier), sorting can introduce side effects. Therefore, it's better to handle sorting with ESLint.

Moreover, Prettier will not warn you about incorrect order, but ESLint will, as this is exactly what **Linter** is supposed to do.

## Reconsideration

According to [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier), Prettier and ESLint indeed "doesn't make your life easier"; instead, you need to spend more time configuring them to handle their conflicts.

So in the future, I will consider using ESLint to handle all code formatting issues.
