---
date: '2023-03-07T22:48:21+08:00'
id: MMEGQK
---

# LaTeX 使用報告

## 紹介

[LaTeX](https://www.latex-project.org) はドキュメント準備システム（Document Preparing System）であり、高品質な印刷物の科学技術文書や数学文書を生成するのに非常に適している。また、簡単な手紙から完全な書籍まで、あらゆる種類のドキュメントを生成することができる。LaTeX は [TeX](https://www.tug.org/svn/texlive) を組版エンジンとして使用している。

つまり、コードの形式で非常に綺麗な PDF 文書を生成できるということだ！Microsoft Word と比べると直感的ではないけれど、綺麗さが全てを決める（（（

## 使用

僕がインストール方法を教えると思った？もちろん教えないよ、Google で検索してみて。

でも、本当に僕が LaTeX を好きかって？実際のところ LaTeX はあまりにも巨大で、しかもまるで前世紀の産物のような感じがする（実際そうなんだけど）。硬直的だが、その結果を忠実に反映している。

LaTeX と比べて、もっとよく使われるのは [Markdown](https://daringfireball.net/projects/markdown) だ。Markdown の文法はシンプルで拡張性が高く、数式機能だけが欲しいなら Markdown でも十分に対応できる。

しかし、Markdown には統一された文法がない。例えば `_斜体_` と `*斜体*` の結果がどちらも _斜体_ になるように、これが様々な Markdown レンダラーのレンダリング結果が異なる原因となっている。プラットフォーム独自の拡張文法は言うまでもない。

で、Markdown の創始者は何をしているんだろう？

## いくつかの不便な点

1. Emoji の挿入が不便
2. カスタムフォントが不便
3. エラーの調査が不便

## 参考リンク

[UTF-8 characters in math mode](https://tex.stackexchange.com/questions/270154/utf-8-characters-in-math-mode)
