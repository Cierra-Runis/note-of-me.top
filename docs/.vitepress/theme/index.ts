import ImageViewer from '@davidingplus/vitepress-image-viewer';
import '@davidingplus/vitepress-image-viewer/style.css';
import '@lowmst/markdown-it-typst-math/dist/index.css';
import 'virtual:group-icons.css';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    ImageViewer(app);
  },
} satisfies Theme;
