---
date: '2023-09-30T12:43:42+08:00'
id: HTOYGW
---

# React Native 使用報告

最近、七牛云のキャンパス Programming コンテストに参加しないかと誘われた。何か学べることがあると思ったので、半ば同意することにした。

昨夜、3 人で簡単に話し合った後、どのフレームワークを選ぶか決めることになった。現在は 2 つの方向性がある —— [React Native](https://reactnative.dev) と [Flutter](https://flutter.dev)。前者は名前は聞いたことがあるが実際には触れたことがないもので、後者は去年の 11 月から学んでいるものだ。

そこで昨日、React Native の基本環境を設定した後、今日はチュートリアルを見に行ったのだが、見れば見るほど React Native は使いにくいと感じた。具体的に分析してみよう。

## 言語がダメ

まず、React Native は JavaScript または TypeScript 言語で Program を書くが、前者の JavaScript は僕が最も不快に感じる言語だ —— PHP もかなりゴミだけど —— 変数の型は散々たるもので、動的型付けは Python にもあるが、Python は僕が小さなものを書くために使うだけで、それで Program 開発をしろと言われても…… 書いたことがないわけではないが、WordCloud は Python で書いたが、体験は非常に悪かった。それに加えて、`==` と `===` の区別があるのが非常に嫌いだ。暗黙の型変換は悪い文明だ。

後者の TypeScript については率直に言うと、僕には理解できない！

Python で型チェックを追加する方法は、変数の後ろにコロンを付けて型を書くだけで、重要なのは、すべての変数に型を付けなくても Program は動くということだ。つまり、lint で警告を出すだけのようなものだが、TypeScript は型を書くなら全部書かなければならず、型も直感的ではない。以前 React を学んでいたときに TypeScript に移行しようとしてもできなかった。その後、React にはあまり興味が持てなくなった。

次に Flutter が使用する言語 Dart について話そう。これは僕が最も気に入って使っている言語だ。

![Most Used Languages](https://github-stats-extended-cierra-runis.vercel.app/api/top-langs/?username=Cierra-Runis&show_icons=true&title_color=ad80ff&icon_color=ff8000&text_color=9f9f9f&bg_color=22272E00&layout=compact&langs_count=10&border_radius=16&size_weight=1&count_weight=0&hide=cmake,c%2B%2B&exclude_repo=github-readme-stats,LiteLoaderQQNT,qweather_icons)

まず、Java に非常に似ていて、僕はかつて一定期間 Java Program を書いていたので、すぐに使いこなせた。そして Java と比べて、null 安全チェックがあり、つまり変数の型の後ろに疑問符を付けたときだけ `null` を代入できる。

それに対して、Java にはそのような要件がないため、ヌルポインタエラーを投げやすい。その構文は Java よりも簡潔で、`new` キーワードはもはや必須ではない。動的型付けもあるので、動的型付けの利点も Dart にはある。

次に、`extension` メソッドが非常に気に入っている。既存のクラス、例えば `DateTime` に、自分が必要とする便利なメソッドを「注入」できる。これは非常に良いことで、[pub.dev](https://pub.dev) には多くの `extension` を専門に収録したパッケージもあり、開発を大いに便利にしてくれる。

## フレームワークがダメ

### パッケージ管理

React と React Native は両方とも巨大な `node_modules` フォルダを作り出す。これは非常にクソな設計で、あまり文句を言わないでおくが、yarn、pnpm はすべてこのゴミを解決するためのものだ。[このブログ](https://gadzan.com/npm-yarn-pnpm)を参照。

そして React Native で僕が不快に感じる点は、その `core` コア Component が少なすぎることだ。Navigation ナビゲーションのようなものさえパッケージをインポートする必要がある。以前は `core` に含まれていたが、後に分離されたと聞いた…… うーん……

次に Flutter のパッケージ管理について話そう。外部のパッケージマネージャーなどはなく、`flutter pub add <パッケージ名>` の一文で解決するか、自分で `pubspec.yaml` ファイルに `<パッケージ名>: <バージョン番号>` の一行を追加するだけだ。バージョン番号を記入しなくても、コロンだけを残しておけば、Flutter 自身が最新で互換性のあるパッケージを取得してくれる。一手に引き受けてくれる感じが最高だ。

では Flutter のパッケージはどこに置かれるのか？Windows を使用している場合、`%LOCALAPPDATA%\Pub\Cache\hosted` の下にある。ソースごとに複数のフォルダに分かれており、一般的には `pub.dev` フォルダと `pub.flutter-io.cn` フォルダだ。`pub.dev` フォルダに入ると、多くのパッケージの異なるバージョンのフォルダが見られるが、統計してみても 2 GB にも満たない。

```PowerShell
PS > "{0} MB" -f [math]::round((Get-ChildItem -Path "$env:LOCALAPPDATA\Pub\" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB, 2)
1301.09 MB
```

優劣は明白だ。

### Component 設計

React と React Native のクラス Component と Flutter の Component は非常に似ているが、自分で状態を管理する Component と状態を持たない Component を明確に区別していない。言い換えれば、すべて `Component` を継承しており、すべて `state` を持っているが、使うか使わないかだけの問題だ。

似ている点は、前者の `constructor` が後者の `initState` に相当し、前者の `render` が後者の `build` に相当し、ライフサイクルが非常に似ているということだ。

Flutter は `StatelessWidget` と `StatefulWidget` に分かれている。前者は `build` メソッドを 1 つオーバーライドするだけで、後者はライフサイクル全体をオーバーライドできる。

### Component の変更

これは僕が非常に嫌いな点だが、Component に対するすべての変更は、Component から遠く離れたキーと値のペアで設定しなければならない。これは非常に分断されている。

実は HTML と CSS を学んでいるときにも同じような感覚があった。なぜスタイルを別のファイルに入れる必要があるのか？すぐそばにあった方が便利ではないか？仕方がない、Web ページがこのようになっているのは歴史的な理由があるからで、React も Web ページを作るものだから理解できるが、React Native の場合は…… 各プラットフォームの WebView で React を実行しているわけではないと知ったとき、僕は理解できなかった。

しかも書いた設定で、`key` には lint の提示がない。マウスをその上に移動しても、この Component にどのような変更可能な属性があるかを教えてくれない。記憶の負担が増える。`value` はさらにひどく、ほとんどが文字列で、すべて同じ型だ。打ち間違えたらどうするのか、コード補完がなかったらどうするのか？

それに対して、Flutter の Component の設定はより快適で、コンストラクタに設定の属性を入力するだけだ。しかも lint はコンストラクタのパラメータとパラメータの型を表示し、[Dart Doc](https://dart.dev/tools/dart-doc) でサンプルも表示される。それに加えて、グローバルなテーマ設定も可能で、例えば `MaterialApp` には `theme` 属性があり、その子 Component ツリーに適用できる。

### 複数プラットフォームでの Component の表現

React Native は 1 つのコードで複数のプラットフォームで動作すると言っているが、僕はその表現は期待に応えていないと思う。複数プラットフォーム間の表現の差が大きすぎる。円形ローディング Component を例に挙げると、サイズ属性値が Android でのみ有効というのはどういうことだ？

これはネイティブ Component の制約によるもので、iOS にはサイズ属性値がない……

一方、Flutter も実際には複数プラットフォーム対応があり、すでに複数プラットフォームに対応している一部の Component、例えば `AlertDialog` には `adaptive` メソッドがある。しかも「ネイティブ Component の制約を受ける」という話はない。

### Navigation ナビゲーション

もう呆れた。僕の理解が間違っているのかもしれないが、ルートに入るすべての Component が改造を受けなければならず、しかも `Navigation` ルート Component で名前付きルートを登録しなければならないのか？

Flutter にはそんなに面倒なことはない。`MaterialApp` の `home` 属性に初期ルート —— つまり `"/"` の名前付きルート —— を入力し、`Navigator.push` メソッドで名前のないルートをプッシュするか、React Native と同様に `MaterialApp` に名前付きルートを入力して、`Navigator.pushNamed` メソッドで名前付きルートをプッシュする。

柔軟性は React Native よりもはるかに優れている。

## 僕の理解が足りない

これは僕自身の問題だが、以上はすべて 1 日接しただけで体験したことで、上記の一部の問題についてはすでに解決策があるかもしれない。
