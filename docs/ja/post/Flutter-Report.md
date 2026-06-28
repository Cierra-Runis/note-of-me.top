---
date: '2022-11-19T13:13:13+08:00'
id: QWZRNF
---

# Flutter 使用報告

## Flutter の紹介

[Flutter](https://flutter.dev) は Google が提供しオープンソース化したモバイル Application 開発フレームワークで、クロスプラットフォーム、高忠実度、高パフォーマンスを特徴としている。開発者は Dart 言語で App を開発でき、一つのコードベースで iOS と Android の両プラットフォームで同時に動作させることができる。Flutter は豊富な Component とインターフェースを提供しており、開発者は素早く Flutter に Native 拡張を追加できる。

ここによく使う資料を記録しておく：

|                   ドキュメント                    |                                                               記事                                                                |
| :-----------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
|         [公式サイト](https://flutter.dev)         | [Flutter のベストプラクティスとコーディングガイドライン](https://ducafecat.com/blog/flutter-best-practices-and-coding-guidelines) |
| [公式英語ドキュメント](https://docs.flutter.dev)  |                     [iPad 大画面 & Flutter マルチエンジン対応への道](https://zhuanlan.zhihu.com/p/589939547)                      |
| [公式中国語ドキュメント](https://flutter.cn/docs) |                            [android:elevation の使い方詳解](https://www.python100.com/html/91048.html)                            |
|      [公式 Package サイト](https://pub.dev)       |                   [Flutter elevation プロパティ名の意味](https://blog.csdn.net/gaoyp/article/details/123126394)                   |
|  [Flutter 実戦](https://book.flutterchina.club)   |                          [Android における elevation の設定方法](https://www.jianshu.com/p/09959db18a4b)                          |
|                                                   |                                 [パターンマッチング](https://juejin.cn/post/7304930607133655059)                                  |

|                  ツール                   |                           パッケージ                            |
| :---------------------------------------: | :-------------------------------------------------------------: |
| [Json to Dart](https://jsond.bytex.space) | [画像キャッシュ](https://pub.dev/packages/cached_network_image) |
|                                           |   [BasedWidget](https://github.com/Cierra-Runis/based_widget)   |
|                                           |    [QWeatherIcons](https://pub.dev/packages/qweather_icons)     |

## index.dart ファイルでインポートを簡素化する

`lib/index.dart` 内ですべてのサブフォルダ配下の `index.dart` ファイルを `export` し、それらは当該フォルダ配下の自身以外のすべての `*.dart` ファイルを `export` する。

すべての `*.dart` ファイル（`main.dart` を含む）内で、できるだけ `import 'package:<プロジェクト名>/index.dart';` だけでインポートを簡素化できる。

同時に外部パッケージを導入する際も、`lib/index.dart` ファイル内でインポートするだけでよい。もちろん、時には異なるパッケージ間でクラス名の衝突が発生することもあるが、その場合は該当パッケージを使用する場所で個別に `import` するか、`hide` または `show` 構文で制限すればよい。具体例は以下の通り：

```Dart
/// 各ルート配下の index.dart
export 'main.dart';
export 'pages/index.dart';
export 'widgets/index.dart';

/// flutter 関連
/// [RefreshCallback] は `export 'package:flutter/material.dart'` と衝突、両者は似ている
export 'package:flutter/cupertino.dart' hide RefreshCallback;
export 'package:flutter/services.dart'
    show DeviceOrientation, SystemChrome; // デバイスサービス
/// [Badge] は `export 'package:badges/badges.dart'; // 通知バッジ` と衝突、外部パッケージを使いたい
export 'package:flutter/material.dart' hide Badge;
export 'package:flutter/gestures.dart';

/// dart 関連
export 'dart:async' show Timer, StreamSubscription;
export 'dart:convert';
export 'dart:io';
export 'dart:ui' show ImageFilter;

/// 外部パッケージ関連
export 'package:badges/badges.dart'; // 通知バッジ
/// [Interval] は `package:flutter/src/animation/curves.dart` と衝突、両者の構造は全く異なるが、外部パッケージのこれは使わない
export 'package:dart_date/dart_date.dart' hide Interval; // 日付ツール
/// [Text] は `export 'package:flutter/material.dart` と衝突、両者の構造は全く異なるが、外部パッケージのこれは使わない
export 'package:flutter_quill/flutter_quill.dart' hide Text; // リッチテキスト
```

## バージョン番号ビルドの問題

Flutter は `android/app/build.gradle` を使用して APK をパッケージ化しており、それは `flutter.gradle` を導入し `flutter.groovy` を参照している。

`flutter.groovy` の約 `993` 行目：

```Groovy
if (shouldSplitPerAbi()) {
    variant.outputs.each { output ->
        def abiVersionCode = ABI_VERSION.get(output.getFilter(OutputFile.ABI))
        if (abiVersionCode != null) {
            output.versionCodeOverride =
                abiVersionCode * 1000 + variant.versionCode
        }
    }
}
```

僕たちは Flutter が `'split-per-abi'` の [Flag](https://oclif.io/blog/2019/02/20/cli-flags-explained) を使用しているかを判断し、使用している場合は `ABI_VERSION` でバージョンを選択して `* 1000` してからビルド番号を足すことを知っている。公式の説明は [こちらのリンク](https://developer.android.com/studio/build/configure-apk-splits) を参照。

僕たちは `ABI_VERSION map` を以下のように修正するだけでよい：

```Groovy
private static final Map ABI_VERSION = [
    (ARCH_ARM32)        : 0,
    (ARCH_ARM64)        : 0,
    (ARCH_X86)          : 0,
    (ARCH_X86_64)       : 0,
]
```

**_注意：Flutter のバージョンを更新した場合は、この `flutter.groovy` ファイルを再度修正する必要がある_**

## Vivo 系スマホで Flutter プログラムをデバッグできない

Vivo シリーズのスマホが Origin3 にアップグレードした後、Flutter App のデバッグが起動ページで止まり、エラーも一切表示されないことがわかった。詳細は [Github Issue](https://github.com/flutter/flutter/issues/117019) を参照。[こちらのリンク](https://blog.csdn.net/qq910689331/article/details/128790897) から簡略化した。

答えは Vivo がバグってログまで隠してしまったため、僕たちは `IMEI 1` コードを Vivo 公式に提供して認証を受ける必要がある

1. ダイヤルパッドで `*#06#` を入力し、`IMEI 1` の値をコピーする
2. 企業 QQ 番号 3002261823 を追加するか、[公式サイト](https://dev.vivo.com.cn/connectus/customerService) を通じて連絡する
3. 関連する問題と情報を提出し、自分のスマホのワンクリック認証を要求する
4. 認証成功を待ってからダイヤルパッドで `*#*#112#*#*` を入力し、`右上のボタン > その他 > ワンクリック認証` で完了

## `AlertDialog` の `content` に `ListView` を渡すとデバッグモードでエラーが出る

これは変な問題で、release 版では正常に動作する。解決方法は以下の通り：

```Dart
AlertDialog(
  title: (...),
  content: SizedBox(
    width: double.minPositive, // 選択可能な double.maxFinite だが double.minPositive を推奨,
    child: ListView(
      shrinkWrap: true,
      children: (...),
    ),
  ),
  contentPadding: (...),
  actions: (...),
);
```

## Ard 構文

詳細は [このページ](https://my.oschina.net/lemos/blog/5559979) を参照。

## 感想

- Flutter の使用は非常に簡単で、習得も早く、とても面白い。
- 僕自身が Flutter で多くのプロジェクトを書いてきた。ここに Mercurius 日記ソフトの [リポジトリリンク](https://github.com/Cierra-Runis/mercurius) を載せておく。
