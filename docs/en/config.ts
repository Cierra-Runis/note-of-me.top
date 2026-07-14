/// https://github.com/jooy2/vitepress-sidebar
/// VitePress auto sidebar generator plugin. Easy to use and supports advanced customization.
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/default-theme-config
export default withSidebar({
  lang: 'en',

  themeConfig: {
    nav: [
      { text: 'Post', link: '/en/post/NuxtJs-And-Vue-Report' },
      { text: 'Spec', link: '/en/spec/' },
      { text: 'Friend', link: '/en/friend' },
      { text: 'Minecraft', link: '/en/Minecraft' },
      { text: 'App', link: 'https://app.note-of-me.top' },
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
      text: 'Edit This Page on GitHub',
    },
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page',
    },
    outline: {
      label: 'On This Page',
      level: 'deep',
    },
    lastUpdated: {
      text: 'Last Updated',
    },
    notFound: {
      title: 'PAGE NOT FOUND',
      quote: 'Try switching to another language?',
      linkLabel: 'Go to Home',
      linkText: 'Go to Home',
    },
    langMenuLabel: 'Change Language',
    returnToTopLabel: 'Return to Top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to Light Theme',
    darkModeSwitchTitle: 'Switch to Dark Theme',
    skipToContentLabel: 'Skip to Content',
  },
}, [
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
  {
    basePath: '/en/',
    resolvePath: '/en/spec',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    useFolderTitleFromIndexFile: true,
    documentRootPath: '/docs/en',
    sortMenusByFrontmatterOrder: true,
    scanStartPath: '/spec',
    followSymlinks: true,
  },
  {
    basePath: '/en/',
    resolvePath: '/en/Minecraft',
    useTitleFromFileHeading: true,
    includeRootIndexFile: true,
    useFolderLinkFromSameNameSubFile: true,
    useFolderTitleFromIndexFile: true,
    documentRootPath: '/docs/en',
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
