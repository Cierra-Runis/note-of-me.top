---
date: '2026-03-12T21:01:11+08:00'
id: QGHCIF
---

# 新主页，新气象

## 发展历程

自己最初的博客是基于 GitHub Pages 搭建的，使用的是 [Hexo](https://hexo.io) 框架，而主题 …… 我不记得了。「原先的主题已经很久很久没有实质性更新了，而且自己在自定义方面处处碰壁，于是开始寻找其他博客主题」，接任的主题则是 [Butterfly](https://butterfly.js.org)，确实很不错。

新版博客的主题好看多了，很多地方也能进行自定义。自己还花了一点小钱在 [阿里云](https://www.aliyun.com) 买了个域名，当时因为是托管在 GitHub 的，网站既可以通过 [https://cierra-runis.github.io/](https://cierra-runis.github.io) 访问，也可以通过 [https://www.note-of-me.top](https://www.note-of-me.top) 进行访问，都会重定向到 [https://note-of-me.top](https://note-of-me.top) 的。

除此之外，当时还使用了 [去不图床](https://7bu.top) 作为网站图片的图床，价格也是特别的亲民，对于中国大陆用户的速度有一定提升。

再后来，Hexo 和 Butterfly 都感觉没太有意思，而当时应该也是为了学学 Next.js，才把博客 [重构了一下](https://github.com/Cierra-Runis/note-of-me.top/commit/5ae42b8f8fd08ad89c71b6fb1bfdac6709a58c87)，用得非常顺手，而且还能部署到 Vercel 上，感觉非常棒。

而最近的话，总感觉 Next.js 对于这种博客类型的项目来说有点过于重了，而且面临几个问题：

1. 构建速度慢
2. 多语言支持不太好
3. [Contentlayer](https://contentlayer.dev) 更新停滞
4. Markdown 的热更新失效了，而我也没有找到解决方案

我就想换个更轻量的框架，一度想过 [Docusaurus](https://docusaurus.io)，但它的界面有点丑 …… 转一圈下来，最终选择了 [VitePress](https://vitepress.dev)，它的界面非常简洁，构建速度也非常快，不怕更新停滞，多语言方面也有不错的支持。

而原先的博客里的 MIDI 应用，也转移到了另一个项目，在另一个站点 [https://app.note-of-me.top](https://app.note-of-me.top) 可以访问，本站点就专注于博客内容了。

总之，就是如此。
