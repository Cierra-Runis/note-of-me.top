import ImageViewer from '@davidingplus/vitepress-image-viewer';
import '@davidingplus/vitepress-image-viewer/style.css';
import '@lowmst/markdown-it-typst-math/dist/index.css';
import {
  NolebaseEnhancedReadabilitiesMenu as EnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu as EnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css';
import 'virtual:group-icons.css';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './style/index.css';

import {
  InjectionKey,
  LayoutMode,
  type Options,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(EnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(EnhancedReadabilitiesScreenMenu),
    });
  },
  enhanceApp({ app }) {
    ImageViewer(app);
    app.provide(InjectionKey, {
      layoutSwitch: {
        disableAnimation: true,
        defaultMode: LayoutMode.FullWidth,
      },
      locales: {
        'zh-CN': {
          title: {
            title: '阅读模式',
            titleAriaLabel: '阅读模式',
          },
        },
      },
      spotlight: {
        disabled: true,
      },
    } satisfies Options);
  },
} satisfies Theme;
