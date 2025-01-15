## Docs

|                           |                |                |                              |
| :-----------------------: | :------------: | :------------: | :--------------------------: |
|         [Next.js]         |    [Vercel]    |    [NextUI]    |        [Tailwind CSS]        |
| [Tailwind CSS Typography] |  [Hero Icons]  | [Simple Icons] | [MDX in Next.js is Easy Now] |
|       [Lorem Ipsum]       | [Contentlayer] |    [Shiki]     |                              |

[Next.js]: https://nextjs.org/docs
[Vercel]: https://vercel.com/
[NextUI]: https://nextui.org/docs/guide/introduction
[Tailwind CSS]: https://tailwindcss.com/docs/installation
[Tailwind CSS Typography]: https://github.com/tailwindlabs/tailwindcss-typography
[Hero Icons]: https://heroicons.com/
[Simple Icons]: https://simpleicons.org/
[MDX in Next.js is Easy Now]: https://www.youtube.com/watch?v=MsSUAOkepCw
[Lorem Ipsum]: https://www.lipsum.com/
[Contentlayer]: https://github.com/timlrx/contentlayer2
[Shiki]: https://github.com/shikijs/shiki

## Notes

### Is Prettier Feature Conflicting with ESLint?

While configuring tools to improve code quality, I was unsure whether I should use Prettier or ESLint for handling the sorting of imports, properties, and Tailwind CSS classes.

Although Prettier plugins like [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) and [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports) can address this, I don't consider them the "best practice".

As discussed in this [GitHub Issue](<(https://github.com/prettier/prettier/issues/2460)>) and this [Reddit Post](https://www.reddit.com/r/typescript/comments/15lr8p1/sorting_imports_eslint_vs_prettier), sorting can introduce side effects. Therefore, it's better to handle sorting with ESLint.

Moreover, Prettier will not warn you about incorrect order, but ESLint will, as this is exactly what ES**Lint** is supposed to do.
