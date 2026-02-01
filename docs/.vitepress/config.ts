import markdownTypstMath from '@lowmst/markdown-it-typst-math';
import { defineConfig } from 'vitepress';
/// https://github.com/jooy2/vitepress-sidebar
/// VitePress auto sidebar generator plugin. Easy to use and supports advanced customization.
import { generateSidebar } from 'vitepress-sidebar';
import type { SidebarMulti } from 'vitepress-sidebar/types';
import { retrieveInitialLink } from './lib';

/// https://vp.yuy1n.io
/// Enhance code blocks features for VitePress.
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons';

/// https://vitepress-sidebar.cdget.com/advanced-usage/multiple-sidebars-how-to
const sidebarConfig = generateSidebar([
  {
    basePath: '/', /// https://vitepress-sidebar.cdget.com/guide/options#basepath
    resolvePath: '/post', /// https://vitepress-sidebar.cdget.com/guide/options#resolvepath
    collapsed: true, /// https://vitepress-sidebar.cdget.com/zhHans/guide/options#collapsed
    useTitleFromFileHeading: true, /// https://vitepress-sidebar.cdget.com/guide/options#usetitlefromfileheading
    documentRootPath: '/docs/zh-CN', /// https://vitepress-sidebar.cdget.com/guide/options#documentrootpath
    scanStartPath: '/post', /// https://vitepress-sidebar.cdget.com/guide/options#scanstartpath
    sortMenusByFrontmatterDate: true, /// https://vitepress-sidebar.cdget.com/zhHans/guide/options#sortmenusbyfrontmatterdate
    sortMenusOrderByDescending: true, /// https://vitepress-sidebar.cdget.com/zhHans/guide/options#sortmenusorderbydescending
    followSymlinks: true, /// https://vitepress-sidebar.cdget.com/guide/options#followsymlinks
  },
]) as SidebarMulti;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ノート of 我',
  titleTemplate: ':title - ノート of 我',
  description: '一个简单的笔记',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    'zh-CN/:rest*': ':rest*',
  },
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          '.ps1': 'vscode-icons:file-type-powershell',
        },
      }),
    ],
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ],
    },
  },
  markdown: {
    config: (md) => {
      md.use(markdownTypstMath).use(groupIconMdPlugin, {
        titleBar: { includeSnippet: true },
      });
    },
    codeCopyButtonTitle: '复制',
  },
  router: { prefetchLinks: true },
  locales: {
    root: {
      label: '简体中文 (zh-CN)',
      lang: 'zh-CN',
    },
    en: {
      label: 'English (en)',
      lang: 'en',
    },
    ja: {
      label: '日本語 (ja)',
      lang: 'ja',
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: retrieveInitialLink(sidebarConfig, '/post') },
      { text: '应用', link: '/app' },
      { text: '友链', link: '/friend' },
    ],
    sidebar: sidebarConfig,

    socialLinks: [
      {
        icon: 'github', /// https://simpleicons.org
        link: 'https://github.com/Cierra-Runis',
        ariaLabel: 'GitHub',
      },
    ],

    editLink: {
      pattern:
        'https://github.com/Cierra-Runis/note-of-me.top/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '页面导航',
      level: 'deep',
    },
    lastUpdated: {
      text: '最后更新于',
    },
    notFound: {
      title: '页面未找到',
      quote: '切换到别的语言试试？',
      linkLabel: '前往首页',
      linkText: '前往首页',
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
});
