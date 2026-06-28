---
date: '2024-03-28T13:52:05+08:00'
id: DZXTHU
---

# Next.js と React 使用報告

使用報告シリーズの新しい穴を掘ったぞ。今日話すのは [Next.js](https://nextjs.org/docs) 14 だ。なぜ 14 なのかって？僕が 14 から学んだからだよ、文句言うなよ。

まず紹介しようか、最新の Next.js 公式サイトでは自分自身を「The React Framework for the Web」と称している。以前は「本番環境向け」という肩書きがついていた記憶があるけど、とにかく、これはフレームワークで、開発のあらゆる面を親切に考えてくれているんだ。

そうだ、もしかしたら [React](https://react.dev/learn) についても紹介する必要があるかもしれない。React は自分自身を「JavaScript library」と紹介している。僕から見ると、それは従来の命令型 JavaScript 操作を、より簡潔な宣言型 Component に変えて、Component の再利用性を向上させているんだ。

そう、大学の授業では [jQuery](https://jquery.com) を使って HTML 要素を操作することを教えられたけど、なんでまだこれ死んでないの？めっちゃ疲れるじゃん？古代の遺物じゃん？

それに、React が操作するのは [DOM](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Introduction) ノードで、`<Link>` Component を通じて、「ページ遷移」時に実際にページを遷移することなく、新しく取得した情報に基づいて現在のページを更新できる。直感的に言えば、ブラウザの左上に読み込み中のぐるぐるアイコンが表示されなくなり、シングルページアプリケーションを可能にしているんだ。

[シングルページアプリケーション](https://developer.mozilla.org/ja/docs/Glossary/SPA) って何かも説明する必要あるかな（？）

## すごくいいルーティング

Next.js の大きなメリットは、ファイルシステムベースのルーティングだ。React が提供していた元のルート登録の方式を取り除いて、動的ルーティングを提供してくれる。

具体的には細かく話さないけど、一つ説明しておくべきことがある。たとえ [React Native](https://reactnative.dev) がファイルシステムベースの動的ルーティングを持っていても、僕は React Native を好きにはならない。なぜなら、モバイルはモバイル、ウェブはウェブだから。本当にウェブのやり方が好きなら、WebView でウェブを動かせばいいじゃん。

## Component 設計

Next.js は React のフレームワークで、React 向けに開発されたすべての UI ライブラリが Next.js で使える（某 React Native とは違って（指差し.jpg））。

以前、謝さんと大会に参加した時は [MUI](https://mui.com) 傘下の [Joy UI](https://mui.com/joy-ui/getting-started) を使っていたけど、React のエコシステムはあまりにも広大で、Joy UI に限定されない。自分は [NextUI](https://nextui.org/docs/components/avatar) と [Ant Design](https://ant.design/components/overview-cn) に乗り換えた。前者は Next.js を開発している Vercel 社とは何の関係もないけど、UI がすごく似ているし、後者はアントグループが開発している。

他人の Component を使うのは、基本的に彼らのドキュメント通りにやればいい。彼らが提供する属性は一般的に十分だ。

でも、僕たちはやっぱり自分でスタイルを書くこともある。ここで [Tailwind CSS](https://tailwindcss.com) について触れないわけにはいかない。

## Component の修正

インラインスタイルを `style` 属性で設定すると、非常に冗長になってしまう。Tailwind CSS はこれを大幅に改善してくれるし、レスポンシブ対応も優れている —— 例えば、画面サイズへの対応、ダークモードへの対応、印刷状態への対応など。

僕が好きじゃない外部 CSS ファイルのことは言うまでもない。

## サーバー Component とクライアント Component

これについてはチュートリアルを見たけど、チュートリアルの方法は Next.js 14 より前のもので、僕の理解はまだあまり明確じゃない。よくエラーが出て `"use client"` を使えと言われてから気づくんだ。

これはもっと理解を深めないとな。

> [!TIP] 2025-01-05 18:48:20 追記
>
> Minecraft にもサーバーサイド mod とクライアントサイド mod の区別がある。サーバーサイドはクライアントサイドだけが持つ API を呼び出せない。これになぞらえると、ユーザーのブラウザに依存するコンテンツは、すべて `"use client"` を使うべきなんだ

## 状態管理と Hook

React 自体が [状態管理](https://react.dev/learn/passing-data-deeply-with-context) といくつかのシンプルな [Hooks](https://react.dev/reference/react/hooks) を持っている。僕が Flutter を学んだ時、Flutter 自体に組み込まれている、やはり `context` を通じて上方向にルート Component に保存された状態を検索する [状態管理](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html)、そして [flutter_hooks](https://pub.dev/packages/flutter_hooks) パッケージの Hooks についてある程度理解していたから、というか Flutter と flutter_hooks 自体が React から多くを学んでいるから、僕も React の状態管理と Hooks について大まかな概念を持っていた。

具体的な深堀りはやっぱりプロジェクトを書くことに頼らないとね。原理は分からなくてもいいけど、使い方が分からないってのはダメでしょ —— まあ面接で聞かれるかもしれないけどね。

Flutter にコミュニティの状態管理ソリューションがあるように、React にも他の状態管理ソリューションがある —— [Redux](https://redux.js.org)（実際 Flutter コミュニティにも [同名パッケージ](https://pub.dev/packages/redux) がある）けど、僕は使えない。

それに謝さんによるとこれは複雑すぎるらしく、[zustand](https://github.com/pmndrs/zustand) を勧めてくれた。その時が来たら色々学んでみるつもりだ。

Hooks に関しては、`useEffect` が何のために使われるのかあまり理解していない。`useState` だけで十分な気がする —— `useEffect` のネットワークリクエストへの応用を見たけど、明らかにもっとすごい Hooks を見つけた —— [useSWR](https://swr.vercel.app/ja/docs/getting-started)、これも Next.js の背後にいる同じチームによって作られたものだ。

本当に超便利なんだよこれ。

## まとめ

Next.js と React の組み合わせは、ウェブ開発に非常に適している。もしかしたら今後 [Vue](https://vuejs.org) を学ぶ時に、また彼らの比較をするかもしれない。だからこの報告には絶対第二期があるはずだ。
