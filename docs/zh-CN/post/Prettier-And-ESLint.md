---
date: '2025-05-01T22:13:14+08:00'
id: WKQYMU
---

# Prettier 与 ESLint

## 开始

在写本网站时我曾对 [Prettier](https://prettier.io) 和 [ESLint](https://eslint.org) 的混合使用感到困惑，在查了相关资料后，我在项目 README.md 中这样记述：

### Prettier 的功能和 ESLint 冲突了吗？

在使用配置工具提高代码质量的过程中，我不太确定该使用 Prettier 还是 ESLint 来处理导入、属性和 Tailwind CSS 类名的排序。

虽然一些 Prettier 插件如 [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) 和 [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports) 能处理，但我不认为他们是“最佳实践”。

据这个 [GitHub Issue](https://github.com/prettier/prettier/issues/2460) 和这个 [Reddit 帖子](https://www.reddit.com/r/typescript/comments/15lr8p1/sorting_imports_eslint_vs_prettier) 讨论的内容，排序会引入副作用，因此更适合使用 ESLint 来处理排序。

不仅如此，Prettier 不会警告你错误的排列顺序，但 ESLint 会，因为这正是一个 **Linter** 该做的。

## 再思考

根据 [为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh) 的记述，Prettier 和 ESLint 确实“并没有让你的生活变得更简单”，相反，为了处理它们之间的冲突，你需要花费更多的时间来配置它们。

所以以后我会考虑使用 ESLint 来处理所有的代码格式化问题。
