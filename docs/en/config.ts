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
]) as SidebarMulti;

// https://vitepress.dev/reference/default-theme-config
export default defineAdditionalConfig({
  lang: 'en',

  themeConfig: {
    nav: [
      {
        text: 'Post',
        link: retrieveInitialLink(sidebarConfig, '/en/post'),
      },
      { text: 'Spec', link: '/en/spec/' },
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
});
