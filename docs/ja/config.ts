/// https://github.com/jooy2/vitepress-sidebar
/// VitePress auto sidebar generator plugin. Easy to use and supports advanced customization.
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/default-theme-config
export default withSidebar({
  lang: 'ja',

  themeConfig: {
    nav: [
      { text: 'ポスト', link: '/ja/post/NuxtJs-And-Vue-Report' },
      { text: '仕様', link: '/ja/spec/' },
      { text: '友だち', link: '/ja/friend' },
      { text: 'Minecraft', link: '/ja/Minecraft' },
      { text: 'アプリ', link: 'https://app.note-of-me.top' },
    ],

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
}, [
  {
    basePath: '/ja/', /// https://vitepress-sidebar.cdget.com/guide/options#basepath
    resolvePath: '/ja/post', /// https://vitepress-sidebar.cdget.com/guide/options#resolvepath
    collapsed: true, /// https://vitepress-sidebar.cdget.com/zhHans/guide/options#collapsed
    useTitleFromFileHeading: true, /// https://vitepress-sidebar.cdget.com/guide/options#usetitlefromfileheading
    documentRootPath: '/docs/ja', /// https://vitepress-sidebar.cdget.com/guide/options#documentrootpath
    scanStartPath: '/post', /// https://vitepress-sidebar.cdget.com/guide/options#scanstartpath
    sortMenusByFrontmatterDate: true, /// https://vitepress-sidebar.cdget.com/zhHans/guide/options#sortmenusbyfrontmatterdate
    sortMenusOrderByDescending: true, /// https://vitepress-sidebar.cdget.com/zhHans/guide/options#sortmenusorderbydescending
    followSymlinks: true, /// https://vitepress-sidebar.cdget.com/guide/options#followsymlinks
  },
  {
    basePath: '/ja/',
    resolvePath: '/ja/spec',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    useFolderTitleFromIndexFile: true,
    documentRootPath: '/docs/ja',
    sortMenusByFrontmatterOrder: true,
    scanStartPath: '/spec',
    followSymlinks: true,
  },
  {
    basePath: '/ja/',
    resolvePath: '/ja/Minecraft',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    useFolderLinkFromSameNameSubFile: true,
    useFolderTitleFromIndexFile: true,
    documentRootPath: '/docs/ja',
    sortMenusByFrontmatterOrder: true,
    scanStartPath: '/Minecraft',
    followSymlinks: true,
    collapsed: true,
    collapseFromLevel: 2,
    manualSortFileNameByPriority: [
      "index.md",
    ]
  },
]);
