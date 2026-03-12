import ImageViewer from '@davidingplus/vitepress-image-viewer';
import '@davidingplus/vitepress-image-viewer/style.css';
import '@lowmst/markdown-it-typst-math/dist/index.css';
import {
  NolebaseEnhancedReadabilitiesMenu as EnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu as EnhancedReadabilitiesScreenMenu,
  InjectionKey,
  LayoutMode,
  type Options,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css';
import 'virtual:group-icons.css';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { defineComponent, h } from 'vue';
import './style/index.css';

const KbdGroup = defineComponent({
  name: 'KbdGroup',
  setup(_, { slots, attrs }) {
    return () =>
      h(
        'span',
        {
          ...attrs,
          class: ['vp-kbd-group', attrs.class],
        },
        slots.default?.(),
      );
  },
});

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
    app.component('KbdGroup', KbdGroup);
    app.provide(InjectionKey, {
      layoutSwitch: {
        disableAnimation: true,
        defaultMode: LayoutMode.FullWidth,
      },
      // https://github.com/nolebase/integrations/tree/main/packages/vitepress-plugin-enhanced-readabilities/src/locales
      locales: {
        'zh-CN': {
          title: {
            title: '阅读增强',
            titleAriaLabel: '阅读增强',
          },
          layoutSwitch: {
            title: '布局切换',
            titleAriaLabel: '布局切换',
            titleHelpMessage:
              '调整 VitePress 的布局样式，以适配不同的阅读习惯和屏幕环境',
            titleScreenNavWarningMessage: '移动端暂不支持布局切换',
            optionFullWidth: '全部展开',
            optionFullWidthAriaLabel: '全部展开',
            optionFullWidthHelpMessage:
              '使侧边栏和内容区域占据整个屏幕的全部宽度',
            optionSidebarWidthAdjustableOnly: '全部展开，但侧边栏宽度可调',
            optionSidebarWidthAdjustableOnlyAriaLabel:
              '全部展开，但侧边栏宽度可调',
            optionSidebarWidthAdjustableOnlyHelpMessage:
              '侧边栏宽度可调，但内容区域宽度不变，调整后的侧边栏将可以占据整个屏幕的最大宽度',
            optionBothWidthAdjustable: '全部展开，且侧边栏和内容区域宽度均可调',
            optionBothWidthAdjustableAriaLabel:
              '全部展开，且侧边栏和内容区域宽度均可调',
            optionBothWidthAdjustableHelpMessage:
              '侧边栏和内容区域宽度均可调，调整后的侧边栏和内容区域将可以占据整个屏幕的最大宽度',
            optionOriginalWidth: '原始宽度',
            optionOriginalWidthAriaLabel: '原始宽度',
            optionOriginalWidthHelpMessage: '原始的 VitePress 默认布局宽度',
            contentLayoutMaxWidth: {
              title: '内容最大宽度',
              titleAriaLabel: '内容最大宽度',
              titleHelpMessage:
                '调整 VitePress 布局中内容区域的宽度，以适配不同的阅读习惯和屏幕环境',
              titleScreenNavWarningMessage: '移动端暂不支持调整内容最大宽度',
              slider: '调整内容最大宽度',
              sliderAriaLabel: '调整内容最大宽度',
              sliderHelpMessage:
                '一个可调整的滑块，用于选择和自定义内容最大宽度',
            },
            pageLayoutMaxWidth: {
              title: '页面最大宽度',
              titleAriaLabel: '页面最大宽度',
              titleHelpMessage:
                '调整 VitePress 布局中页面的宽度，以适配不同的阅读习惯和屏幕环境',
              titleScreenNavWarningMessage: '移动端暂不支持调整页面最大宽度',
              slider: '调整页面最大宽度',
              sliderAriaLabel: '调整页面最大宽度',
              sliderHelpMessage:
                '一个可调整的滑块，用于选择和自定义页面最大宽度',
            },
          },
          spotlight: {
            title: '聚光灯',
            titleAriaLabel: '聚光灯',
            titleHelpMessage:
              '支持在正文中高亮当前鼠标悬停的行和元素，以优化阅读和专注困难的用户的阅读体验',
            titleScreenNavWarningMessage: '移动端暂不支持聚光灯',
            optionOn: '开启',
            optionOnAriaLabel: '开启',
            optionOnHelpMessage: '开启聚光灯',
            optionOff: '关闭',
            optionOffAriaLabel: '关闭',
            optionOffHelpMessage: '关闭聚光灯',
            styles: {
              title: '聚光灯样式',
              titleAriaLabel: '聚光灯样式',
              titleHelpMessage: '调整聚光灯的样式',
              titleScreenNavWarningMessage: '移动端暂不支持调整聚光灯样式',
              optionUnder: '置于底部',
              optionUnderAriaLabel: '置于底部',
              optionUnderHelpMessage:
                '在当前鼠标悬停的元素下方添加一个纯色背景以突出显示当前鼠标悬停的位置',
              optionAside: '置于侧边',
              optionAsideAriaLabel: '置于侧边',
              optionAsideHelpMessage:
                '在当前鼠标悬停的元素旁边添加一条固定的纯色线以突出显示当前鼠标悬停的位置',
            },
          },
        },
        en: {
          title: {
            title: 'Enhanced Readabilities',
            titleAriaLabel: 'Enhanced Readabilities',
          },
          layoutSwitch: {
            title: 'Layout Switch',
            titleAriaLabel: 'Layout Switch',
            titleHelpMessage:
              "Adjust VitePress's layout styles to adapt to different reading habits and screen environments",
            titleScreenNavWarningMessage:
              'Layout switch is not supported on mobile devices',
            optionFullWidth: 'Full Width',
            optionFullWidthAriaLabel: 'Full Width',
            optionFullWidthHelpMessage:
              'Make the sidebar and content area occupy the full width of the entire screen',
            optionSidebarWidthAdjustableOnly:
              'Full Width, Sidebar Width Adjustable Only',
            optionSidebarWidthAdjustableOnlyAriaLabel:
              'Full Width, Sidebar Width Adjustable Only',
            optionSidebarWidthAdjustableOnlyHelpMessage:
              'Only the sidebar width is adjustable, while the content area width remains unchanged. The adjusted sidebar can occupy the maximum width of the entire screen',
            optionBothWidthAdjustable:
              'Full Width, Both Sidebar and Content Area Widths Adjustable',
            optionBothWidthAdjustableAriaLabel:
              'Full Width, Both Sidebar and Content Area Widths Adjustable',
            optionBothWidthAdjustableHelpMessage:
              'Both the sidebar and content area widths are adjustable. The adjusted sidebar and content area can occupy the maximum width of the entire screen',
            optionOriginalWidth: 'Original Width',
            optionOriginalWidthAriaLabel: 'Original Width',
            optionOriginalWidthHelpMessage:
              'The original VitePress default layout width',
            contentLayoutMaxWidth: {
              title: 'Content Max Width',
              titleAriaLabel: 'Content Max Width',
              titleHelpMessage:
                'Adjust the width of the content area in the VitePress layout to adapt to different reading habits and screen environments',
              titleScreenNavWarningMessage:
                'Content max width adjustment is not supported on mobile devices',
              slider: 'Adjust Content Max Width',
              sliderAriaLabel: 'Adjust Content Max Width',
              sliderHelpMessage:
                'An adjustable slider for selecting and customizing the content max width',
            },
            pageLayoutMaxWidth: {
              title: 'Page Max Width',
              titleAriaLabel: 'Page Max Width',
              titleHelpMessage:
                'Adjust the width of the page in the VitePress layout to adapt to different reading habits and screen environments',
              titleScreenNavWarningMessage:
                'Page max width adjustment is not supported on mobile devices',
              slider: 'Adjust Page Max Width',
              sliderAriaLabel: 'Adjust Page Max Width',
              sliderHelpMessage:
                'An adjustable slider for selecting and customizing the page max width',
            },
          },
          spotlight: {
            title: 'Spotlight',
            titleAriaLabel: 'Spotlight',
            titleHelpMessage:
              'Support highlighting the line and element currently hovered by the mouse in the main text to optimize the reading experience for users with reading and concentration difficulties',
            titleScreenNavWarningMessage:
              'Spotlight is not supported on mobile devices',
            optionOn: 'On',
            optionOnAriaLabel: 'On',
            optionOnHelpMessage: 'Turn on the spotlight',
            optionOff: 'Off',
            optionOffAriaLabel: 'Off',
            optionOffHelpMessage: 'Turn off the spotlight',
            styles: {
              title: 'Spotlight Style',
              titleAriaLabel: 'Spotlight Style',
              titleHelpMessage: 'Adjust the style of the spotlight',
              titleScreenNavWarningMessage:
                'Spotlight style adjustment is not supported on mobile devices',
              optionUnder: 'Under',
              optionUnderAriaLabel: 'Under',
              optionUnderHelpMessage:
                'Add a solid color background under the element currently hovered by the mouse to highlight the current mouse hover position',
              optionAside: 'Aside',
              optionAsideAriaLabel: 'Aside',
              optionAsideHelpMessage:
                'Add a fixed solid color line beside the element currently hovered by the mouse to highlight the current mouse hover position',
            },
          },
        },
        ja: {
          title: {
            title: 'リーディングエンハンスメント',
            titleAriaLabel: 'リーディングエンハンスメント',
          },
          layoutSwitch: {
            title: 'レイアウト切り替え',
            titleAriaLabel: 'レイアウト切り替え',
            titleHelpMessage:
              'VitePress のレイアウトスタイルを調整して、さまざまな読書習慣や画面環境に適応します',
            titleScreenNavWarningMessage:
              'モバイル端末ではレイアウト切り替えはサポートされていません',
            optionFullWidth: '全幅表示',
            optionFullWidthAriaLabel: '全幅表示',
            optionFullWidthHelpMessage:
              'サイドバーとコンテンツエリアが画面全体の幅を占めるようにします',
            optionSidebarWidthAdjustableOnly:
              '全幅表示、サイドバーの幅のみ調整可能',
            optionSidebarWidthAdjustableOnlyAriaLabel:
              '全幅表示、サイドバーの幅のみ調整可能',
            optionSidebarWidthAdjustableOnlyHelpMessage:
              'サイドバーの幅のみ調整可能で、コンテンツエリアの幅は変わりません。調整後のサイドバーは画面全体の最大幅を占めることができます',
            optionBothWidthAdjustable:
              '全幅表示、サイドバーとコンテンツエリアの幅を両方調整可能',
            optionBothWidthAdjustableAriaLabel:
              '全幅表示、サイドバーとコンテンツエリアの幅を両方調整可能',
            optionBothWidthAdjustableHelpMessage:
              'サイドバーとコンテンツエリアの幅を両方調整可能で、調整後のサイドバーとコンテンツエリアは画面全体の最大幅を占めることができます',
            optionOriginalWidth: '元の幅',
            optionOriginalWidthAriaLabel: '元の幅',
            optionOriginalWidthHelpMessage:
              'VitePress のデフォルトのレイアウト幅',
            contentLayoutMaxWidth: {
              title: 'コンテンツの最大幅',
              titleAriaLabel: 'コンテンツの最大幅',
              titleHelpMessage:
                'VitePress レイアウトのコンテンツエリアの幅を調整して、さまざまな読書習慣や画面環境に適応します',
              titleScreenNavWarningMessage:
                'モバイル端末ではコンテンツの最大幅を調整できません',
              slider: 'コンテンツの最大幅を調整する',
              sliderAriaLabel: 'コンテンツの最大幅を調整する',
              sliderHelpMessage:
                'コンテンツの最大幅を選択およびカスタマイズするための調整可能なスライダー',
            },
            pageLayoutMaxWidth: {
              title: 'ページの最大幅',
              titleAriaLabel: 'ページの最大幅',
              titleHelpMessage:
                'VitePress レイアウトのページの幅を調整して、さまざまな読書習慣や画面環境に適応します',
              titleScreenNavWarningMessage:
                'モバイル端末ではページの最大幅を調整できません',
              slider: 'ページの最大幅を調整する',
              sliderAriaLabel: 'ページの最大幅を調整する',
              sliderHelpMessage:
                'ページの最大幅を選択およびカスタマイズするための調整可能なスライダー',
            },
          },
          spotlight: {
            title: 'スポットライト',
            titleAriaLabel: 'スポットライト',
            titleHelpMessage:
              '本文中で現在マウスオーバーしている行と要素をハイライト表示して、読書や集中力に問題のあるユーザーの読書体験を最適化します',
            titleScreenNavWarningMessage:
              'モバイル端末ではスポットライトはサポートされていません',
            optionOn: 'オン',
            optionOnAriaLabel: 'オン',
            optionOnHelpMessage: 'スポットライトをオンにする',
            optionOff: 'オフ',
            optionOffAriaLabel: 'オフ',
            optionOffHelpMessage: 'スポットライトをオフにする',
            styles: {
              title: 'スポットライトスタイル',
              titleAriaLabel: 'スポットライトスタイル',
              titleHelpMessage: 'スポットライトのスタイルを調整します',
              titleScreenNavWarningMessage:
                'モバイル端末ではスポットライトスタイルは調整できません',
              optionUnder: '下に配置',
              optionUnderAriaLabel: '下に配置',
              optionUnderHelpMessage:
                '現在マウスオーバーしている要素の下に単色の背景を追加して、現在マウスオーバーしている位置を強調表示します',
              optionAside: '横に配置',
              optionAsideAriaLabel: '横に配置',
              optionAsideHelpMessage:
                '現在マウスオーバーしている要素の横に固定された単色の線を追加して、現在マウスオーバーしている位置を強調表示します',
            },
          },
        },
      },
      spotlight: {
        disabled: true,
      },
    } satisfies Options);
  },
} satisfies Theme;
