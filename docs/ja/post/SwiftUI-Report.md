---
date: '2024-05-25T22:56:46+08:00'
id: TELMXD
---

# SwiftUI 使用レポート

## Swift 言語

[Swift](https://developer.apple.com/swift) は [Apple](https://www.apple.com) が開発したプログラミング言語である —— [某社](https://www.huawei.com) の [ArkTS 言語](https://developer.huawei.com/consumer/cn/arkts) のように [TypeScript](https://www.typescriptlang.org) の皮を被っただけのものとは違う —— 使用範囲も非常に狭く、自社製品の開発にしか使われていない。

Swift と [Kotlin](https://kotlinlang.org) は非常に似ており、かなり奇妙な構文をいくつか革新している。例えば:

```Dart
// Dart
callFunction(parma1, (value) {
  final value2 = value * 2;
  print(value2);
});
```

このように最後のパラメータが関数の場合、次のように書ける:

```Swift
// Swift
callFunction(parma1) { value in
  let value2 = value * 2
  print(value2)
}
```

コードが見やすくなったかというと確かに見やすくはなったが、コードフォーマット時にこの見やすい形式に自動フォーマットしてくれないし、この形式で書こうとしてもコード補完がこの形式で補完してくれない。結局時間の無駄になってしまう。

僕は Swift があまり好きではない。その理由は以下の通りだ:

1. Swift 言語を使うには Xcode を使わなければならない
2. Xcode にはコードフォーマッターが標準搭載されておらず、自分でプラグインを探す必要がある
3. フォーマットスタイルが統一されていない
4. ホットリロードがない（Dart は Flutter に依存せずにホットリロードができる）

Swift 関連のプロジェクトを探していた時、Swift をホットリロード可能にする [InjectIII](https://github.com/johnno1962/InjectionIII) プロジェクトを見つけた。なぜ Apple は追加しないのだろうか?

> [!TIP] 2024-07-05 12:50:35 訂正
>
> Swift は macOS、Linux、Windows で使用できる。詳しくは [公式ドキュメント](https://www.swift.org/getting-started) を参照。
>
> これで Swift がもっと好きになった 🥰

## Xcode

本当に文句を言いたい：これは人間が使う IDE なのか？

本当に信じられないのは、Xcode に国際化機能がないこと、そしてそのパネルのレイアウトがなぜこんなにも反人間的なのか、ファイル管理ビューがなぜこんなに窮屈に感じられるのか。

Xcode も Android Studio と同じようにプロジェクトビューがあることは知っているが、Android Studio ならファイルビューに切り替えられる。しかし Xcode では、僕の選択肢はどこに？

`Preview` 機能は評価すべきだ。SwiftUI はホットリロードに対応していないので、`Preview` すらなかったらもう書き続けることができないだろう。

しかしこの `Preview` は状態を失うので、やはり少し使えない。

## SwiftUI

君たちのドキュメントには文句を言いたい。例を載せるのが惜しいのか？テキストの説明だけでは、このコンポーネント、関数、クラスをどう使えばいいのかわからないじゃないか？

`List` も不可解だ。ドキュメントには子コンポーネントに自動的に背景と区切り線を追加することが説明されていない。僕は考え込んでしまった。

`LabeledContent` というこんなに良いコンポーネントがあるのに、よくもまあ放置しておけるものだ。僕は最初ずっと `HStack { Label() Space() Text() }` のように書いて、Flutter の `ListTile` コンポーネントのようなものを実現していた。

Flutter のような [コンポーネント Gallery](https://flutter.github.io/samples/web/material_3_demo) があって展示してくれればいいのに、でもそれがない。

称賛すべき点は `Text` コンポーネントだ。Markdown を直接書いて URL リンクに変換できる:

```Swift
Text("[byrdsaron@gmail.com](mailto:byrdsaron@gmail.com)")
```

## まとめ

資料が少なすぎる。僕は悲しい。

自分で SwiftUI を使って手書きフォント作成ソフトウェアを書いているが、[Unicode](https://home.unicode.org)、フォント、グリフに関する知識を理解する必要がある。特に SwiftUI でこれをどう実現するかは、かなり低レベルな関数とインターフェースに触れる必要があるからだ。

しかし資料は少なすぎる、公式ドキュメントは簡略すぎる、僕はめちゃくちゃ悲しい 😢。
