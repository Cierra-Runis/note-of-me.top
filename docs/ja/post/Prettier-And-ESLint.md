---
date: '2025-05-01T22:13:14+08:00'
id: WKQYMU
---

# Prettier と ESLint

## はじめに

このウェブサイトを構築する際、僕は [Prettier](https://prettier.io) と [ESLint](https://eslint.org) の併用について混乱していた。関連資料を調べた後、プロジェクトの README.md に次のように記録した:

### Prettier の機能は ESLint と競合しているか?

コード品質を向上させるためのツールを設定する過程で、僕はインポート、プロパティ、Tailwind CSS のクラス名のソートを処理するために、Prettier と ESLint のどちらを使うべきか迷っていた。

[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) や [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports) のような Prettier プラグインで対応できるが、僕はそれらを「ベストプラクティス」とは考えていない。

この [GitHub Issue](https://github.com/prettier/prettier/issues/2460) とこの [Reddit の投稿](https://www.reddit.com/r/typescript/comments/15lr8p1/sorting_imports_eslint_vs_prettier) で議論されているように、ソートは副作用を引き起こす可能性がある。したがって、ソートは ESLint で処理する方が適している。

さらに、Prettier は誤った順序について警告してくれないが、ESLint は警告してくれる。これこそが **Linter** が本来すべきことだからだ。

## 再考

[このブログ](https://antfu.me/posts/why-not-prettier-zh) の記述によれば、Prettier と ESLint は確かに「生活を簡単にしてくれない」。むしろ、それらの競合を処理するために、より多くの時間を費やして設定する必要がある。

だから今後は、すべてのコードフォーマットの問題を ESLint で処理することを考えている。
