---
date: '2025-09-14T00:05:13+08:00'
id: BXMDGI
---

# プログラミング言語雑談

皆さんこんにちは、今日は皆さんが見たいものをお届けしますね。

世界にはたくさんのプログラミング言語があり、それぞれの言語には独自の長所と短所があり、使用シーンも異なります。中国の教育では一般的に C 言語を入門言語として選び、その後 Java、Python などを教えます。僕はこれまで長い間コードを書いてきて、多くの言語に触れてきたので、やはり色々な考えがあります。ここでそれをシェアしたいと思います。注意として、本記事は雑談なので、文章はかなりカジュアルです。

僕は中学生の頃からプログラミングに興味を持ち始めて、『C 言語入門から精通まで』という本を買いました ―― そして Hello World を書いた後、二度と読むことはありませんでした。やはり若すぎたというか、思考力がまだ足りなかったですし、教材自体も遅れていました。どう遅れていたかは本当に言いにくいですが、中国のほとんどの教材は常に実際の生産現場から大きく遅れており、これは誰もが知っていることです。開発ツールについて言えば、本の中で推奨されていたのは Visual Studio 6.0 でした。なんて古いものなんだって感じですね。

C 言語そのものに話を戻すと、今からいくつかの欠点について話したいと思います。そうです、僕は実は C 言語があまり好きではありません。高級言語とは言われていますが、低レベル層にあまりにも近すぎて、ちょっと「高級」とは言えないと思っています。

## 文字列

C 言語における文字列の定義はこうなっています：

```c
char s[6] = {'H', 'e', 'l', 'l', 'o', '\0'}; // 定義長度為 6 的字符串
char s2[5] = {'H', 'e', 'l', 'l', 'o'};      // 定義長度為 5 的字符串，未以 '\0' 結尾
```

C 言語を学んでいた時、僕は文字列の処理が本当に面倒だと思っていました。C 言語には専用の文字列型がなく、文字列は実際には文字配列で、終わりに特殊なヌル文字 `\0` を使って終了を示します。なぜでしょうか？それは C 言語が配列の範囲外アクセスをサポートしているからで、`\0` がなければ文字列がどこで終わるかわからないのです。

Python で `list` を使って文字列をシミュレートする例と比較してみましょう：

```python
s = ['H', 'e', 'l', 'l', 'o']                # 定義長度為 5 的字符串
```

もし 6 番目の要素 `s[5]` にアクセスしようとすると、Python は `IndexError` 例外を投げて、インデックスが範囲外であることを教えてくれます。一方、C 言語では、`s[5]` にアクセスすると文字列が終わったことがわかりますが、`s2[5]` にアクセスすると完全に [未定義動作](https://en.wikipedia.org/wiki/Undefined_behavior) になり、セキュリティホールやクラッシュが発生する可能性が高いです。

YouTube の動画 [The worst programming language of all time](https://www.youtube.com/watch?v=7fGB-hjc2Gc) は 2 時間も C++を批判していて、笑い死にそうでした。

実は、[Rust プログラミング言語](https://doc.rust-lang.org/stable/book/ch08-02-strings.html#strings-are-not-so-simple) が言っているように、文字列は決して簡単ではありません。エンコーディングや Unicode などの問題を処理する必要があり、文字化けを見たことがない人はほとんどいないと思います。

## 渡された引数の変更

まず結論から言うと：僕は渡された値を変更することに断固反対です。このやり方は直感的でもなく、安全でもなく、さらに関数型プログラミングの基本原則に反しています。

```ts
export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt({ token, user }) {
      // The arguments user, account, profile and isNewUser are only passed the first time this callback is called on a new session,
      // after the user signs in. In subsequent calls, only token will be available.
      // token : The current JSON Web Token
      // user : The user object returned by the callback for the session (only available on first sign in)
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },

    session({ session, token }) {
      if (session.user == undefined) {
        session.user = {};
        session.user.name = token.name;
      } else {
        session.user.name = token.name;
      }
      session.step = token.step;
      session.secretCode = token.secretCode;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.mfaSession = token.mfaSession;
      return session;
    },
  },
};
```

C 言語では、引数の渡し方には 2 つの方法があります：値渡しとポインタ渡しです。値渡しはまだいいですが、少なくとも元のデータには影響しません。しかしポインタ渡しは厄介で、関数が渡された引数をこっそり変更するかどうか、永遠にわかりません。

```c
void mysterious_function(int *arr, int size) {
    // この関数は何をするの？
    // 配列の内容を変更するの？
    // 実装を見ないとわからない！
}
```

このような設計がもたらす問題は明らかです：

1. 可読性が悪い：関数呼び出しからだけでは引数が変更されるかどうか判断できない
2. デバッグが困難：データが予期せず変更された時、どの関数がやったのか追跡するのが難しい
3. 副作用が氾濫：関数はもはや純粋関数ではなく、副作用に満ちた「ブラックボックス」になる

さらに悪いことに、C 言語には `const` キーワードの厳密な制限がなく（初期バージョン）、明確な入出力パラメータのマークもありません。関数を手に入れても、それがあなたのデータに何をするか全くわかりません。

## undefined か null か？

JavaScript/TypeScript では、`undefined` と `null` がありますが、彼らには一体どんな違いがあるのでしょうか？僕は JavaScript/TypeScript に触れ始めた時からずっとよくわかりませんでした。

`Map` というデータ構造を理解するまで、値を取得する際に初めて両者の違いを発見しました：

## ひどい NullPointerException

Java 言語では、`NullPointerException`（略して NPE）は最も一般的なランタイムエラーの一つです。NPE は通常、`null` であるオブジェクトのメンバーやメソッドにアクセスしようとした時に発生します。

```java
String str = null;
int length = str.length(); // ここでNullPointerExceptionが投げられる
```

NPE の問題は、通常実行時に初めて発見されることで、これによってデバッグが非常に困難になります。さらに悪いことに、NPE はプログラムのどこでも発生する可能性があり、プログラムのクラッシュや予測不可能な動作を引き起こします。

## 早期リターン

<!-- 我直接拿一段 [真实的代码](https://github.com/vuejs/vitepress/issues/3093#issuecomment-2840860942)，然后把改完的版本贴出来吧，自己看看区别就懂了。

原版：

```ts
export const inlineHighlightPlugin = (md) => {
  const codeRender = md.renderer.rules.code_inline;
  md.renderer.rules.code_inline = (...args) => {
    const [tokens, idx, options] = args;
    const token = tokens[idx];
    if (token.attrs == null) {
      return codeRender(...args);
    } else {
      const lang = token.attrs[0][0];
      if (options.highlight) {
        const htmlStr = options.highlight(token.content, lang, '');
        return htmlStr
          .replace(/^<pre class="/, '<span class="inline-code-highlight ')
          .replace(/<\/pre>$/, '</span>');
      } else {
        return codeRender(...args);
      }
    }
  };
};
```

改版：

```ts
export const inlineHighlightPlugin = (md) => {
  const codeRender = md.renderer.rules.code_inline;
  md.renderer.rules.code_inline = (...args) => {
    const [tokens, idx, options] = args;
    const token = tokens[idx];
    if (token.attrs == null || !options.highlight) return codeRender(...args);
    const lang = token.attrs[0][0];
    const htmlStr = options.highlight(token.content, lang, '');
    return htmlStr
      .replace(/^<pre class="/, '<span class="inline-code-highlight ')
      .replace(/<\/pre>$/, '</span>');
  };
};
``` -->

では、[実際のコード](https://github.com/vuejs/vitepress/issues/3093#issuecomment-2840860942)を取り、その修正版を貼り付けてみましょう。違いはすぐにわかると思います。

オリジナル：

```ts
export const inlineHighlightPlugin = (md) => {
  const codeRender = md.renderer.rules.code_inline;
  md.renderer.rules.code_inline = (...args) => {
    const [tokens, idx, options] = args;
    const token = tokens[idx];
    if (token.attrs == null) {
      return codeRender(...args);
    } else {
      const lang = token.attrs[0][0];
      if (options.highlight) {
        const htmlStr = options.highlight(token.content, lang, '');
        return htmlStr
          .replace(/^<pre class="/, '<span class="inline-code-highlight ')
          .replace(/<\/pre>$/, '</span>');
      } else {
        return codeRender(...args);
      }
    }
  };
};
```

修正版：

```ts
export const inlineHighlightPlugin = (md) => {
  const codeRender = md.renderer.rules.code_inline;
  md.renderer.rules.code_inline = (...args) => {
    const [tokens, idx, options] = args;
    const token = tokens[idx];
    if (token.attrs == null || !options.highlight) return codeRender(...args);
    const lang = token.attrs[0][0];
    const htmlStr = options.highlight(token.content, lang, '');
    return htmlStr
      .replace(/^<pre class="/, '<span class="inline-code-highlight ')
      .replace(/<\/pre>$/, '</span>');
  };
};
```
