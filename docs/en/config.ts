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
      text: 'Edit This Page on GitHub',
    },
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page',
    },
    outline: {
      label: 'Outline',
      level: 'deep',
    },
    lastUpdated: {
      text: 'Last Updated',
    },
    notFound: {
      title: 'Page Not Found',
      quote: 'Try switching to another language?',
      linkLabel: 'Go to Homepage',
      linkText: 'Go to Homepage',
    },
    langMenuLabel: 'Change Language',
    returnToTopLabel: 'Return to Top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to Light Mode',
    darkModeSwitchTitle: 'Switch to Dark Mode',
    skipToContentLabel: 'Skip to Content',
  },
});
