---
date: '2026-03-12T21:01:11+08:00'
id: QGHCIF
---

# 新しいホームページ、新しい気分

## 開発の歴史

最初のブログは GitHub Pages をベースに構築され、[Hexo](https://hexo.io) フレームワークを使用していたが、テーマは覚えていない。「元のテーマは長い間実質的な更新がなく、カスタマイズする際にあちこちで壁にぶつかったので、他のブログテーマを探し始めた。」次のテーマは [Butterfly](https://butterfly.js.org) で、確かにとても良い。

新しいバージョンのブログのテーマははるかに見栄えが良く、多くの場所でカスタマイズできるようになった。僕は少しお金をかけて [阿里云](https://www.aliyun.com) でドメインを購入したので、当時は GitHub にホストされていたため、ウェブサイトは [https://cierra-runis.github.io/](https://cierra-runis.github.io) と [https://www.note-of-me.top](https://www.note-of-me.top) の両方からアクセスでき、どちらも [https://note-of-me.top](https://note-of-me.top) にリダイレクトされていた。

さらに、当時は [去不画像ホスティング](https://7bu.top) をウェブサイトの画像ホスティングサービスとして使用しており、価格も特に手頃で、中国本土のユーザーにとって速度が一定程度向上している。

その後、Hexo と Butterfly はどちらもあまり面白く感じられなくなり、その当時は Next.js を学ぶためだったと思うが、ブログを [リファクタリング](https://github.com/Cierra-Runis/note-of-me.top/commit/5ae42b8f8fd08ad89c71b6fb1bfdac6709a58c87) して、非常にスムーズに動作し、Vercel にデプロイできるようになり、非常に素晴らしいと感じた。

最近では、Next.js はこの種のブログプロジェクトには少し重すぎると感じており、いくつかの問題に直面している：

1. ビルド速度が遅い
2. 多言語サポートがあまり良くない
3. [Contentlayer](https://contentlayer.dev) の更新停滞
4. Markdown のホットアップデートが無効になっており、解決策が見つかっていない

より軽量なフレームワークに切り替えたいと思い、一度は [Docusaurus](https://docusaurus.io) を考えたが、インターフェースが少し醜い…… いろいろ回ってみて、最終的に [VitePress](https://vitepress.dev) を選択した。インターフェースは非常にシンプルで、ビルド速度も非常に速く、更新停滞も気にせず、多言語サポートも良好だ。

元のブログの MIDI アプリケーションも別のプロジェクトに移動され、別のサイト [https://app.note-of-me.top](https://app.note-of-me.top) でアクセスできるようになり、このサイトはブログコンテンツに専念することになる。

とにかく、そんな感じです。
