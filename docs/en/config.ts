import { defineAdditionalConfig } from 'vitepress';
/// https://github.com/jooy2/vitepress-sidebar
/// VitePress auto sidebar generator plugin. Easy to use and supports advanced customization.
import { generateSidebar } from 'vitepress-sidebar';
import type { SidebarMulti } from 'vitepress-sidebar/types';
import { retrieveInitialLink } from '../.vitepress/lib';

/// https://vitepress-sidebar.cdget.com/advanced-usage/multiple-sidebars-how-to
const sidebarConfig = generateSidebar([
  {
    basePath: '/en/', /// https://vitepress-sidebar.cdget.com/guide/options#basepath
    resolvePath: '/en/post', /// https://vitepress-sidebar.cdget.com/guide/options#resolvepath
    collapsed: true, /// https://vitepress-sidebar.cdget.com/zhHans/guide/options#collapsed
    useTitleFromFileHeading: true, /// https://vitepress-sidebar.cdget.com/guide/options#usetitlefromfileheading
    documentRootPath: '/docs/en', /// https://vitepress-sidebar.cdget.com/guide/options#documentrootpath
    scanStartPath: '/post', /// https://vitepress-sidebar.cdget.com/guide/options#scanstartpath
    sortMenusByFrontmatterDate: true, /// https://vitepress-sidebar.cdget.com/zhHans/guide/options#sortmenusbyfrontmatterdate
    sortMenusOrderByDescending: true, /// https://vitepress-sidebar.cdget.com/zhHans/guide/options#sortmenusorderbydescending
    followSymlinks: true, /// https://vitepress-sidebar.cdget.com/guide/options#followsymlinks
  },
]) as SidebarMulti;

// https://vitepress.dev/reference/default-theme-config
export default defineAdditionalConfig({
  lang: 'en',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      {
        text: 'Post',
        link: retrieveInitialLink(sidebarConfig, '/en/post'),
      },
      { text: 'App', link: '/en/app' },
      { text: 'Friend', link: '/en/friend' },
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
      text: 'GitHub でこのページを編集',
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },
    outline: {
      label: '目次',
      level: 'deep',
    },
    lastUpdated: {
      text: '最終更新日',
    },
    notFound: {
      title: 'ページが見つかりません',
      quote: '他の言語に切り替えてみては？',
      linkLabel: 'ホームページへ',
      linkText: 'ホームページへ',
    },
    langMenuLabel: '言語を変更',
    returnToTopLabel: 'トップに戻る',
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: '表示設定',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え',
    skipToContentLabel: 'コンテンツにスキップ',
  },
});
