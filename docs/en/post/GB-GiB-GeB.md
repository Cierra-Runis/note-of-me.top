---
date: '2025-05-09T08:04:32+08:00'
id: CWOATN
---

# GB? GiB~ GeB!

## Introducing "GeB": A Clear Decimal Counterpart to GiB

We strongly recommend GeB over GB for all decimal-based contexts.

## Background

When measuring digital storage, we often encounter **GB** and **GiB**, but their meanings differ significantly:

| Abbreviation | Fullname |         Bytes          |                                  |
| :----------: | :------: | :--------------------: | :------------------------------: |
|     GiB      | Gibibyte | $2^30 = 1,073,741,824$ |     Standardized by the IEC      |
|      GB      | Gigabyte | $10^9 = 1,000,000,000$ | SI-defined, but ambiguously used |

This leads to confusion: storage vendors use GB, but operating systems show GiB. Users often feel shortchanged when numbers don't match.

## Proposal: Introduce **GeB**

We propose a new symbol: **GeB**, standing for **G**id**e**byte (**G**iga-d**e**cimal Byte), as a clean, unambiguous counterpart to **GiB**, standing for **G**ib**i**byte (**G**iga-b**i**nary Byte).

| Abbreviation | Fullname | Base |           Bytes            |
| :----------: | :------: | :--: | :------------------------: |
|     GeB      | Gidebyte |  10  | $(10^3)^3 = 1,000,000,000$ |
|     GiB      | Gibibyte |  2   | $(2^10)^3 = 1,073,741,824$ |

## Pronunciation Across Languages

Abbreviations like GB, GiB, and GeB can be confusing not only in meaning but also in pronunciation. Different language communities handle technical acronyms differently, which may lead to confusion when discussing storage units.

|      [BCP 47]       |   ~~GB~~   | <ins>GiB</ins> |   _GeB_    |         Method         |
| :-----------------: | :--------: | :------------: | :--------: | :--------------------: |
|    en (English)     | /dʒiːbiː/  |     /gɪb/      |   /gæb/    |      As Word[^1]       |
|     ge (Germân)     | Giga-Byte  |   Gibi-Byte    | Gide-Byte  |     Read Fullname      |
|    ja（日本語）     |  ジービー  |      ギブ      |    ゲブ    |      Copy English      |
| zh-Hans（简体中文） |    G-B     |     G-I-B      |    G-B     | A Pronounce Separately |
| zh-Hant（繁体中文） | 吉比（特） |   吉比（特）   | 格比（特） |     Remix zh-Hans      |

[BCP 47]: https://www.rfc-editor.org/info/bcp47

[^1]: GB in [Initialism](https://simple.wikipedia.org/wiki/Initialism), others in [Acronym](https://en.wikipedia.org/wiki/Acronym).

### Our Recommendation

We recommend that developers, technical writers, and system designers:

- Replace ambiguous "GB" with **GeB** wherever decimal values are intended
- Educate users through UI tooltips or documentation: 1 GeB = $10^9$ Bytes
- Align with the GiB/Geb pair in APIs and interfaces for better clarity

## Beyond GeB: A Whole Family of Decimal Units

The same pattern can apply to other SI-prefixed units. Here’s a proposed decimal units family:

|   Decimal   |            |        |              |   Binary    |           |                 |
| :---------: | :--------: | :----: | :----------: | :---------: | :-------: | :-------------: |
|    Value    |  Fullname  |   SI   | **Proposal** |    Value    | Fullname  | **IEC 60027-2** |
| $(10^3)^1$  |  Kilobyte  | **k**B |   K**e**B    | $(2^10)^1$  | Kibibyte  |     K**i**B     |
| $(10^3)^2$  |  Megabyte  |   MB   |   M**e**B    | $(2^10)^2$  | Mebibyte  |     M**i**B     |
| $(10^3)^3$  |  Gigabyte  |   GB   |   G**e**B    | $(2^10)^3$  | Gibibyte  |     G**i**B     |
| $(10^3)^4$  |  Terabyte  |   TB   |   T**e**B    | $(2^10)^4$  | Tebibyte  |     T**i**B     |
| $(10^3)^5$  |  Petabyte  |   PB   |   P**e**B    | $(2^10)^5$  | Pebibyte  |     P**i**B     |
| $(10^3)^6$  |  Exabyte   |   EB   |   E**e**B    | $(2^10)^6$  | Exbibyte  |     E**i**B     |
| $(10^3)^7$  | Zettabyte  |   ZB   |   Z**e**B    | $(2^10)^7$  | Zebibyte  |     Z**i**B     |
| $(10^3)^8$  | Yottabyte  |   YB   |   Y**e**B    | $(2^10)^8$  | Yobibyte  |     Y**i**B     |
| $(10^3)^9$  | Ronnabyte  |   RB   |   R**e**B    | $(2^10)^9$  | Robibyte  |     R**i**B     |
| $(10^3)^10$ | Quettabyte |   QB   |   Q**e**B    | $(2^10)^10$ | Quebibyte |     Q**i**B     |

This symmetry improves consistency and provides a clear mental model for interpreting storage sizes.

> Note: In line with SI conventions, we use **k**B for $10^3$ bytes. Though **K**B is commonly seen, it's technically incorrect.

## Implementation & Adoption

To encourage adoption:

- Use **GeB** in developer tools, file explorers, and documentation
- Clarify unit meanings explicitly in software UIs
- Encourage open-source libraries to support config options like: `formatSize(value, { unit: 'GeB' })`

## Conclusion

It’s time to clean up our units - for clarity, consistency, and communication.

Let’s make **GeB** the official decimal twin of **GiB**, and stop guessing how many bytes you really got.

**Clear units. Clean minds. GeB it.**
