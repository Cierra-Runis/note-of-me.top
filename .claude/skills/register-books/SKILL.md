---
name: register-books
description: Register newly bought books (given as ISBNs, often with C-CODEs) into the book tables in docs/zh-CN/books/index.md. Use when the user pastes a list of ISBNs or says something like 「登记/登录一下」 or 「新买了这些书」.
---

# Register books in docs/zh-CN/books/index.md

The file has two tables:

- Chinese books (978-7): columns 书名 / 官方 / 编著 / 分类 / ISBN-13.
- Japanese books (978-4): columns 書名 / [公式] / [C-CODE] / 内容 / ISBN-13, followed by `{lang=ja}`.

ISBNs use reference-style links (`[978-…]`), and the link definitions go below the table they belong to.

## 1. Look up bibliographic data

Try these sources in order and stop at the first one that answers:

1. openBD, which can take several ISBNs in one request:
   `curl -s "https://api.openbd.jp/v1/get?isbn=978...,978..."`. Read title, publisher and author from `summary`.
2. National Diet Library, when openBD returns `null`:
   `curl -s "https://ndlsearch.ndl.go.jp/api/opensearch?isbn=978..."`. Grep for `dc:title`, `dc:publisher` and `dcndl:volume`.
3. Kinokuniya: `https://www.kinokuniya.co.jp/f/dsg-01-<13-digit ISBN>`. Read the `<title>`.

Don't start with a WebSearch on the bare ISBN, because it almost never finds anything.

## 2. Find the official link

- Use the publisher's or association's own page, not a retailer like Amazon.
- Run WebSearch (mode: extended) with the title plus the publisher. This works much better than searching the ISBN.
- Open the page and confirm that the ISBN on it matches before you use it.
- Known URL patterns:
  - 技術評論社: `https://gihyo.jp/book/<year>/<ISBN>`
  - アスク: `https://ask-books.com/book-details?slug=<13-digit ISBN>`
  - 漢検: `https://store.kanken.or.jp/products/<ISBN>`
  - 数検: `https://www.su-gaku.net/suken/support/book/<code>` (`www` is required)
  - MdN: `https://books.mdn.co.jp/books/<id>/` (the trailing `/` is required). curl gets a Cloudflare 403 here, so ask the user to check the page in a browser.
  - 小学館, 講談社, KADOKAWA, 新潮社 and others: copy the pattern of the links already in the table.
- Only if no official page can be found, leave the ISBN unlinked and tell the user which books those are.

## 3. Shorten the links

Test each link with curl to see whether `www` and any trailing `/` can be dropped, including a `/` right before `?`. Use the shortest form that still works:

- Judge by the page body, for example by grepping for the book title, not by `<title>` alone. On some sites the body is unchanged without the `/` but the `<title>` turns generic.
- A redirect to the longer address still counts as working.
- A connection failure (curl reports `000`) means that part can't be dropped.
- If curl can't test a link (403 or 429), keep it as is and ask the user to check it in a browser.

## 4. Fill in the table

- Title: separate the main title and the subtitle with a full-width space 「　」, and put half-width spaces around numbers (`準 1 級`, `2026 年版`).
- C-CODE: copy what the user gave. Its 3rd and 4th digits are the content code, which decides the 内容 column. Look the code up, never guess: use the table below, which comes from the Wikipedia page that the file's `[C-CODE]` link points to. If existing rows already use a label for that code, reuse it. Otherwise, when the official name covers several fields, pick the one field that fits the book as the label.

  | Code | Content | Code | Content | Code | Content |
  | --- | --- | --- | --- | --- | --- |
  | 00 | 総記 | 34 | 経営 | 61 | 農林業 |
  | 01 | 百科事典 | 36 | 社会 | 62 | 水産業 |
  | 02 | 年鑑・雑誌 | 37 | 教育 | 63 | 商業 |
  | 04 | 情報科学 | 39 | 民族・風習 | 65 | 交通・通信 |
  | 10 | 哲学 | 40 | 自然科学総記 | 70 | 芸術総記 |
  | 11 | 心理（学） | 41 | 数学 | 71 | 絵画・彫刻 |
  | 12 | 倫理（学） | 42 | 物理学 | 72 | 写真・工芸 |
  | 14 | 宗教 | 43 | 化学 | 73 | 音楽・舞踊 |
  | 15 | 仏教 | 44 | 天文・地学 | 74 | 演劇・映画 |
  | 16 | キリスト教 | 45 | 生物学 | 75 | 体育・スポーツ |
  | 20 | 歴史総記 | 47 | 医学・歯学・薬学 | 76 | 諸芸・娯楽 |
  | 21 | 日本歴史 | 50 | 工学・工学総記 | 77 | 家事 |
  | 22 | 外国歴史 | 51 | 土木 | 78 | 日記・手帳 |
  | 23 | 伝記 | 52 | 建築 | 79 | コミックス・劇画 |
  | 25 | 地理 | 53 | 機械 | 80 | 語学総記 |
  | 26 | 旅行 | 54 | 電気 | 81 | 日本語 |
  | 30 | 社会科学総記 | 55 | 電子通信 | 82 | 英米語 |
  | 31 | 政治（含む国防軍事） | 56 | 海事 | 84 | ドイツ語 |
  | 32 | 法律 | 57 | 採鉱・冶金 | 85 | フランス語 |
  | 33 | 経済・財政・統計 | 58 | その他の工業 | 87 | 各国語 |
  |  |  | 60 | 産業総記 | 90–98 | 文学 (90 総記, 91 日本文学総記, 92 詩歌, 93 小説・物語, 95 評論・随筆, 97 外国文学小説, 98 外国文学その他) |
- Position: order rows roughly by C-CODE category and put each new book next to similar ones. Keep a series in volume order.
- **Don't widen any column.** Before inserting, compute the display width of each cell (full-width characters count as 2). If a cell would be wider than the widest existing cell in that column, shorten it first: drop filler words from the title, or use the publisher's short or brand name. Tell the user when you do this.
- prettier may delete an empty placeholder row the user left in the table, so don't use one to locate where to insert.
