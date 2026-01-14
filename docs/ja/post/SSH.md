---
date: '2024-11-03T12:57:45+08:00'
id: NIBYKQ
---

# SSH

## コマンドラインへの旅立ち

皆さんが初めてコマンドラインを使ったり、ターミナルを見たりしたのはいつでしょうか？大半は初めて C 言語プログラムを書いた時でしょうね。

僕は小学生の時に `bat` ファイルで Minecraft サーバーを立ち上げた時に触れました。その時は「このインターフェース、本当に醜いな。真っ黒だし」と思っていました――でも今は違います。思う存分カスタマイズしていますよ。

ターミナルは Shell を表示するウィンドウで、Shell といえば、Windows には [cmd](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd)、[PowerShell](https://github.com/PowerShell/PowerShell)、[Windows PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/what-is-windows-powershell) があり、macOS や Linux には [Bash](https://www.gnu.org/software/bash) があり、Android では [Termux](https://github.com/termux/termux-app) が使えます――これも Linux みたいなものですね。Termux の設定については [Termux 高級ターミナルのインストール・使用・設定チュートリアル](https://www.sqlsec.com/2018/05/termux.html) を参照してください。

macOS と Linux は関係がより近く、どちらも Bash の代わりに [Zsh](https://ohmyz.sh) を Shell として使えます。Zsh の設定については [この記事](https://www.mintimate.cn/2021/02/05/configZsh) を参照してください。

Zsh は Bash と比べてコマンドライン履歴の補完機能を提供してくれます。Windows では、これを実現するには [PowerToys](https://github.com/microsoft/PowerToys) をダウンロードして、その中の `コマンドが見つかりません` 機能を有効にする必要があります――コマンドライン補完は PowerShell の機能のようですが、とにかくこのように設定すれば問題ありません。

macOS では、デフォルトのターミナルはそれほど「美しく」ないので、僕は [iTerm2](https://iterm2.com) に乗り換えました。関連する設定については省略します。

## SSH への旅立ち

Mac mini を購入した後、[SwiftUI](https://developer.apple.com/xcode/swiftui) を書く以外にも、Mac mini で何か別のことをしたいと思いました――僕は macOS を使いこなせないんです。操作の論理が Windows と比べて違和感がある部分が多すぎて、僕はやはり Windows を主な開発環境として使い続けると思います。

そこで動画を見て、Mac mini が [ソフトルーター](https://bulianglin.com/archives/openwrt.html)、[NAS](https://en.wikipedia.org/wiki/Network-attached_storage)、サーバー……などとして使えることを知りました。おっ、サーバー。

ちょうど最近 Minecraft で遊んでいて、Mac mini は Minecraft サーバーの立ち上げに完全に適しています――実は試してみたかっただけなんですけど、とにかく僕の Windows ノートパソコンの負担を少し軽減できるでしょう。Mac mini に論理処理を専念させて、Windows ノートパソコンにはレンダリングを専念させるんです。

これはリモート操作に関わってきます――実はこれは「リモート」とは言えないかもしれません。LAN 内だけの操作ですからね。でも――僕はかつて発作的に意味もなく Alibaba Cloud のサーバーを購入したことがあって、なぜ使うべきか、どう使うべきか全く理解していませんでした。とにかく僕は [SSH](https://en.wikipedia.org/wiki/Secure_Shell) 接続のステップについては記憶があります。

具体的な SSH の有効化手順についてはここでは詳しく述べません。今は別のことを話しましょう。

SSH はパスワード不要のログインをサポートしています。つまり [GPG](https://gnupg.org) の非対称暗号化を使います――僕は実は楕円曲線の数学的性質に特に興味があるんですが、現在見つけた資料は抽象代数の方法を使ったものばかりで、伝統的な解析幾何学のような説明はありません。

> 暗号化：公開鍵で暗号化、秘密鍵で復号化
>
> 公開鍵は公開され、公開鍵を持つ誰もが秘密鍵の所有者に送りたい情報を暗号化して送信できます。この情報は秘密鍵の所有者だけが復号化できます。
>
> 署名：秘密鍵で暗号化、公開鍵で復号化
>
> 公開鍵は公開され、公開鍵を持つ誰もが秘密鍵で暗号化された暗号文を復号化できます。このプロセスはメッセージの安全性を保証するものではありませんが、メッセージの送信元の正確性と否認不可性を保証します。つまり、公開鍵で正常に復号化できる暗号文があれば、その暗号文は必ず秘密鍵の所有者が発行したものであり、第三者が発行したものではないことを証明でき、秘密鍵の所有者はそのメッセージを発行したことを否定できません。

## PowerShell への旅立ち

Windows と macOS の SSH サービスを設定した後、Windows から macOS へのリモート接続に成功しました。同様に、macOS からも Windows へリモート接続できますが、リモート接続後にデフォルトで入る Shell がなんと cmd だったんです。これは本当に笑えました。

- [SSH で Windows に接続する際にデフォルトで PowerShell を有効にする](https://learn.microsoft.com/zh-cn/windows-server/administration/OpenSSH/openssh-server-configuration#configuring-the-default-shell-for-openssh-in-windows)

- [WSL デフォルトディレクトリ](https://whlit.github.io/linux/wsl-default-dir.html)

以上のように設定した後、SSH がもたらす便利さを存分に楽しみましょう。

## BUG

そうなんです。Windows から macOS にアクセスして `ls/ll` コマンドで中国語ファイル名を含むフォルダの内容をリストすると、以下のような文字化けが発生します：

```bash
➜  mods git:(main) ✗ ll
total 80440
-rw-r--r--  1 cierra_runis  staff   2.0M Oct 28 04:33 ???Fabric API???fabric-api-0.92.2+1.20.1.jar
-rw-r--r--  1 cierra_runis  staff   6.3M Oct 28 04:50 ???Kotlin ?????????fabric-language-kotlin-1.9.5+kotlin.1.8.22.jar
-rw-r--r--  1 cierra_runis  staff   533K Oct 28 05:15 ???Masa ????????????malilib-fabric-1.20.1-0.16.3.jar
...
```

解決策は `.zsh_rc` で以下のコメントを解除して、`LANG` を `en_US.UTF-8` に固定することです：

```bash
# You may need to manually set your language environment
export LANG=en_US.UTF-8
```
