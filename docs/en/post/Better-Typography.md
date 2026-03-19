---
date: '2024-05-05T22:03:56+08:00'
id: KNJISM
---

# Better Typography

Since I started keeping a diary, I've paid more and more attention to text typography.

I hope that what I write is carefully designed and feels comfortable to others when they read it, so I've been learning about related knowledge.

Therefore, I excerpt and supplement some rules from the following sources:

- [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)
- [Requirements for Chinese Text Layout - 中文排版需求](https://www.w3.org/International/clreq)
- [ASCII and Unicode quotation marks](https://www.cl.cam.ac.uk/~mgk25/ucs/quotes.html)

## Using Centered Ellipsis

> In its presentation, it occupies two Chinese character spaces, contains six ellipsis points, and is centered both horizontally and vertically on the glyph. This is typically achieved using two consecutive `U+2026 HORIZONTAL ELLIPSIS […]`.
>
> In Chapter 6.2 of Unicode Standard Version 14, it also recommends using `U+22EF MIDLINE HORIZONTAL ELLIPSIS [⋯]` as the ellipsis.
>
> This symbol, combined with appropriate rotation and replacement mechanisms, keeps the ellipsis points centered regardless of horizontal or vertical layout, better meeting typographic needs.

However, according to [this comment](https://github.com/sparanoid/chinese-copywriting-guidelines/issues/58#issuecomment-355893405), the latter belongs to mathematical symbols - presumably the character corresponding to `\cdots` in LaTeX - and considering [this comment](https://github.com/sparanoid/chinese-copywriting-guidelines/issues/58#issuecomment-356473325) points out that <kbd>^</kbd> is mapped to the former by default, I personally still use the former.

> [!WARNING] WIP
>
> To achieve centered ellipsis, this website specifically uses fonts with centered glyph styles.

## Using Standard Proper Nouns

For example, GitHub - when officially used, it's always **G**it**H**ub, never github or gitHub.

Xcode as well, the c is lowercase, while VSCode has an uppercase C.

Of course, in programming there's a naming convention like `camelCase`, so what would GitHub correspond to? Is it `github` or `gitHub`?

Interested readers can refer to the Programming and coding section in the [camelCase Wikipedia article](https://en.m.wikipedia.org/wiki/Camel_case).

My thinking is that since they designed it that way, preserving their characteristics is naturally the best approach.

Here's a list of naming conventions I ultimately adopt:

|       Category       | Naming Convention |                Examples                |
| :------------------: | :---------------: | :------------------------------------: |
|     Proper Nouns     |         -         |      GitHub、SurviRed、API、JSON       |
| Variables, Functions |     camelCase     |  `gitHub`、`surviRed`、`api`、`json`   |
|     Class Names      |    PascalCase     | `GitHubAPI`、`SurviRedJSON`、`APIJSON` |
|    Constant Names    |   CONSTANT_CASE   |             `SURVIRED_API`             |
|   Filenames, URLs    |    kebab-case     |             `github-json`              |

## Stop Overusing Parentheses

Layer upon layer of nested parentheses can extremely "twist" the meaning, requiring mental gymnastics to understand, and the sight of multiple closing parentheses strung together is very unsightly. Especially when multiple parentheses within parentheses are followed by the next sentence, it's very difficult to quickly find what preceding text they refer to.

Example:

> I knew but wasn't in the mood to listen (I'm usually pretty good at blocking things out (though during the last weekly comprehensive science (Chinese language (?)) exam, there was a funeral outside, and the funeral music completely destroyed me)), while my classmate beside me was listening with great interest.

A better approach is to avoid using parentheses as much as possible, flatten the content you want to express as much as possible, and use em dashes for abrupt sentences.

Revised:

> I knew but wasn't in the mood to listen - I'm usually pretty good at blocking things out, though during the last weekly comprehensive science (Chinese language?) exam, there was a funeral outside, and the funeral music completely destroyed me - while my classmate beside me was listening with great interest.

## Adding Spaces When Mixing Chinese and English

In most cases, adding spaces between half-width and full-width characters gives the impression that the text isn't so cramped.

Take this sentence for example:

```text
我喜欢吃apple，不喜欢吃peach和orange。
```

Adding spaces:

```text
我喜欢吃 apple ，不喜欢吃 peach 和 orange 。
```

Here, spaces are added on both sides of each word.

However, in reality, after apple and orange, there's a full-width punctuation mark, and this punctuation mark can visually be seen as a half-width symbol plus a space, so we can remove the trailing space.

```text
我喜欢吃 apple，不喜欢吃 peach 和 orange。
```

But for punctuation marks like "——" and "……" that occupy the full width, they do look a bit cramped now, so it's recommended to add spaces.

In particular, "——" should have spaces on both sides, while "……" only needs a space after it - of course, just like with mixing Chinese and English, there should be some compression of the whitespace.

This also brings an advantage, let me explain:

When editing text, we often use <kbd>←</kbd> or <kbd>→</kbd> to move the cursor, but this is very inconvenient.

We can use <KbdGroup><kbd>Ctrl</kbd><span>+</span><kbd>←</kbd></KbdGroup> or <KbdGroup><kbd>Ctrl</kbd><span>+</span><kbd>→</kbd></KbdGroup> for quick navigation. For editors like Microsoft Word, they intelligently segment Chinese words, so when jumping, you'll jump to the beginning or end of a word, not the entire sentence.

For editors that haven't implemented Chinese word segmentation, the added spaces act as a "springboard", making navigation more convenient.

### Units of Measurement

1 kg, 1 m, 1 s. Spaces are needed between numbers and units - this is actually an English typographic requirement - but for things like 100%, the percentage sign doesn't need a space.

For terms like 4G (fourth-generation mobile communication technology), it's a proper noun itself, so no space is needed, but 4 G can indeed express meanings like "four times gravity" or "four gold coins", so it depends on the context.

Also, let's talk about Apple's attention to detail in this regard. They subtly adjust the spacing (kerning) between half-width and full-width characters, which looks similar to adding spaces, but adding your own spaces might actually make the spacing too large.

However, considering not all devices have this feature, adding your own spaces is still more universal.

### Slashes

In English typography, slashes representing "or" don't need spaces on either side, essentially treating it as one of the 26 English letters (joke).

However, in code, slashes typically represent division and need spaces on both sides for better readability.

## Quotation Marks

- [直角引号 「」『』 源自哪里？](https://www.zhihu.com/question/19867627)
- [请正确使用直角引号与西文引号](https://zhuanlan.zhihu.com/p/20151625)
- [ASCII and Unicode quotation marks](https://www.cl.cam.ac.uk/~mgk25/ucs/quotes.html)

Hello everyone, we are `“` `”` `‘` `’` `"` `'` `「` `」` `『` `』`, today let's give you what you want to see.

## "Or"

Does "A or B" mean choose one of the two? Or either one is acceptable?

In mathematics, programming, or logic, "or (OR)" defaults to the latter, strictly speaking it's called "logical or", while to express the former, "exclusive or (XOR)" is used.

In natural language, it leans more toward exclusive or, but it still depends on the context. For example, the phrase "in mathematics, programming, or logic" above expresses logical or.

What about A/B? This doesn't actually emphasize choosing one or either being acceptable, it might even express that both must appear, expressing A ∧ B, like I/O.

In short, using OR and XOR can avoid this kind of problem.
