---
date: '2023-01-02T23:58:49+08:00'
id: TPUGYY
---

# クラウドドライブの同期と Obsidian 関連

以前、とある配信で誰かが新しそうなツールで Markdown を書いているのを見て、とても気になって [Obsidian](https://obsidian.md) をダウンロードしてみた。公式の同期サービスの価格がめちゃくちゃ高いのを見て配信で愚痴ったところ、自前で同期できるという情報を得て、iCloud を活用することにした～

## iCloud と Obsidian

具体的には、Apple が Windows 向けに [クラウド同期ツール](https://www.microsoft.com/store/productId/9PKTQ5699M62) をリリースしていて、インストールしてログインすれば、パソコンで iPad のファイル管理アプリと同期された iCloud ドライブの項目が見られるようになる。iPad の Obsidian アプリで iCloud にボールトを作成すると、iCloud ドライブに Obsidian フォルダが現れ、アプリの設定やファイルの作成・編集・削除がすぐに同期される。もちろん、iCloud がたまに調子悪くてファイルを宙ぶらりんにしちゃうこともなくはない 😡。

個人的には、iCloud に毎月 6 元（訳注: 約 120 円）を払うのはすごく価値があると思う。安くて使いやすいなら価値がある ―― だからこの同期スペースを無駄にはできない。僕は元々パソコンに溜め込んでいた写真や音楽、ファイルを全部アップロードして、開発ツールをたくさん入れて重くなったパソコンの負担を軽減した。

> [!TIP] 2025-01-05 21:51:25 補足
>
> 現在は Google Drive に移行し、Obsidian の使用をやめた

あ、元々は自分の「プライベートファイル」もアップロードして便利にしようと思っていたけど、**頭上三尺に神明あり** で、鉄拳が雲上貴州（訳注: 中国のデータセンター）に届く可能性もあるから、他のクラウドに移行したんだ。

## Google Drive

Google Drive はよく知られた理由で直接アクセスできないから、ここなら「プライベートファイル」を安全に保存できる。そもそも僕がこういうものを鑑賞する時は、同時に技術的手段で Wikipedia を調べたり、iPad のすごく便利な GoodNotes でノートを取ったりするから、GoodNotes のバックアップ先も Google Drive に設定した～

## OneDrive と MaterialFiles と FolderSync

ここまでは主に iPad と Windows 間のファイル同期に注目してきたけど、明らかに Android 陣営も一言あるよね。

僕は [osu!](https://osu.ppy.sh) をプレイしていて、公式の [stable](https://osu.ppy.sh/home/download) 版、[lazer](https://osu.ppy.sh/wiki/zh/Help_centre/Upgrading_to_lazer) 版、[MATRIX-夜翎](https://space.bilibili.com/305637715) が lazer 版から fork してメンテナンスしている [mfosu](https://github.com/MATRIX-feather/osu) 版、ずっと更新されなくて「このままだといつか僕自身が fork して更新するぞ」と思ってる [osu!droid](https://github.com/osudroid/osu-droid) 版がある。そのうち僕がプレイしているのは Windows の stable 版と Android の osu!droid 版。いいところは、ファイル構造が互換性があって、単に両者の `Songs` フォルダを同期すればいいだけ。

> [!TIP] 2024-06-10 20:45:00 補足
>
> 現在 Windows は lazer 版に移行し、lazer 版の譜面ファイルシステムは異なるため、単純な同期はできなくなった

だけど、こんなシンプルな方法でも実装するのはすごく面倒。

まず同期するクラウドを選ぶ必要がある。iCloud は Android をサポートしてないし、Google Drive にはあの技術的手段が必要だから、他の方法を考えることにした。

実はここで別の方法もあったんだけど、続けなかった理由は少し分かりにくいのと、速度が遅かったから。でも一応記録しておく。bilibili で [Syncthing](https://syncthing.net) というソフトを紹介する動画を見たことがある。特徴は [P2P](https://en.wikipedia.org/wiki/Peer-to-peer) で安全・高速（疑問符付き）。両デバイスで相互にフレンド登録して、それぞれ対象フォルダを設定すれば、接続が成功したら同期が始まる。残念ながら僕の環境では接続が不安定だった ―― よく考えると、これは僕の使用シーンにはあまり合っていない。これは両方がオンラインで接続成功している必要があるから、結局諦めた。

あれこれ試して、やっぱり Microsoft の OneDrive に落ち着いた。cmd で次のコマンドを実行:

```PowerShell
cmd /c mklink /d "D:\OneDrive\Songs" "D:\osu\Songs"
```

リンクを作成して、`D:\OneDrive` という僕が個人的に設定した OneDrive フォルダ（デフォルトがどこだったか忘れた）に `Songs` フォルダを出現させる。中を見たら、なんと `D:\osu\Songs` の中身じゃないか。これで Windows 側は成功。

問題は Android 側で、こっちは iCloud が任意のフォルダを同期できないよりもさらにひどくて、ファイルマネージャーにすら表示されない ――

> ここで明記すべきは、Android 端末によってファイルマネージャーが異なるけど、Android 13 以降は底層のファイルマネージャーでないと `data` フォルダを開けない。その底層ファイルマネージャーで OneDrive が見えるけど、あまり役に立たない。任意のフォルダを管理できないから。

色々調べた結果、ファイルマネージャーとして [MaterialFiles](https://github.com/zhanghai/MaterialFiles)、ファイル同期マネージャーとして [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite) をおすすめする。

前者は [Material Design](https://m3.material.io) スタイルを採用したとてもシンプルなファイルマネージャーで、主な特徴は:

- `data` フォルダに直接アクセスできる
- FTP でリモートアクセスできる
- インストールパッケージは 8 MB と小さく、使用量も 20 MB を超えない

一言で言うと、すごく使いやすい～

後者は任意のフォルダを選択でき、超多数のクラウド同期サービスに対応したファイル同期マネージャー。詳しい説明は省くけど、「フォルダペア」を作成してファイル同期すればいい ―― まあ、僕のファイルが 2 万個近くあって同期するのはちょっと重いんだけどね。

## まとめ

Apple のものは自社製品で使うととても便利だし、Android の良さはカスタマイズ性が高いこと～ Windows？最高だね！
