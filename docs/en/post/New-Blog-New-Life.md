---
date: '2026-03-12T21:01:11+08:00'
id: QGHCIF
---

# New Blog, New Life

## Development History

My original blog was built based on GitHub Pages, using the [Hexo](https://hexo.io) framework, and the theme... I don't remember. "The original theme has not been substantially updated for a long time, and I have encountered obstacles in customization everywhere, so I started looking for other blog themes." The successor theme is [Butterfly](https://butterfly.js.org), which is indeed very good.

The theme of the new version of the blog looks much better, and many places can be customized. I also spent a little money on [Alibaba Cloud](https://www.aliyun.com) to buy a domain name. At that time, because it was hosted on GitHub, the website could be accessed through both [https://cierra-runis.github.io/](https://cierra-runis.github.io) and [https://www.note-of-me.top](https://www.note-of-me.top), both of which would redirect to [https://note-of-me.top](https://note-of-me.top).

In addition, at that time, I also used [去不 Image Hosting](https://7bu.top) as the image hosting for the website, which is particularly affordable and has certain speed improvements for users in mainland China.

Later, Hexo and Butterfly both felt a bit uninteresting, and at that time it should have been to learn Next.js, so I [refactored](https://github.com/Cierra-Runis/note-of-me.top/commit/5ae42b8f8fd08ad89c71b6fb1bfdac6709a58c87) the blog, which worked very smoothly and could be deployed on Vercel, which felt great.

Recently, I feel that Next.js is a bit too heavy for this type of blog project, and there are several problems:

1. Slow build speed
2. Poor multi-language support
3. [Contentlayer](https://contentlayer.dev) update stagnation
4. Markdown hot update is invalid, and I haven't found a solution

I wanted to switch to a lighter framework, and I once thought about [Docusaurus](https://docusaurus.io), but its interface is a bit ugly... After going around, I finally chose [VitePress](https://vitepress.dev), which has a very simple interface, very fast build speed, is not afraid of update stagnation, and has good support for multiple languages.

The MIDI application in the original blog has also been moved to another project, and can be accessed at another site [https://app.note-of-me.top](https://app.note-of-me.top), and this site will focus on blog content.

In short, that's it.
