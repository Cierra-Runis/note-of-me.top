import type { Config as TailwindConfig } from 'tailwindcss';

import { nextui, NextUIPluginConfig } from '@nextui-org/theme';
import typography from '@tailwindcss/typography';

const nextUIPluginConfig: NextUIPluginConfig = {
  themes: {
    dark: {
      colors: {
        /// https://uicolors.app/create
        /// Use #282C34 as seed, then generate these colors
        /// Since #282C34 be set to 950, the background color
        /// Then 50-900 will be the foreground colors
        /// Use the same order as the light mode
        /// Reverse the order of the colors for dark mode
        background: '#282C34',
        /// Content colors use 50-300 from default (as same as foreground)
        content1: '#353b45',
        content2: '#3c4450',
        content3: '#454f5f',
        content4: '#546175',
        /// Default colors as same as foreground
        default: {
          100: '#3c4450',
          200: '#454f5f',
          300: '#546175',
          400: '#6a798d',
          50: '#353b45',
          500: '#8895a8',
          600: '#b2bac7',
          700: '#d6dae1',
          800: '#edeef1',
          900: '#f6f7f9',
          DEFAULT: '#454f5f', /// But DEFAULT is the same as 200
          foreground: '#8895a8',
        },
        foreground: {
          100: '#3c4450',
          200: '#454f5f',
          300: '#546175',
          400: '#6a798d',
          50: '#353b45',
          500: '#8895a8',
          600: '#b2bac7',
          700: '#d6dae1',
          800: '#edeef1',
          900: '#f6f7f9',
          DEFAULT: '#8895a8', /// DEFAULT is the same as 500
        },
      },
    },
    light: {
      colors: {
        background: '#FFFFFF', /// Generator doesn't generate this one, so use white
        /// Content colors use 50-300 from default (as same as foreground)
        content1: '#f6f7f9',
        content2: '#edeef1',
        content3: '#d6dae1',
        content4: '#b2bac7',
        /// Default colors as same as foreground
        default: {
          100: '#edeef1',
          200: '#d6dae1',
          300: '#b2bac7',
          400: '#8895a8',
          50: '#f6f7f9',
          500: '#6a798d',
          600: '#546175',
          700: '#454f5f',
          800: '#3c4450',
          900: '#353b45',
          DEFAULT: '#6a798d', /// But DEFAULT is the same as 500
          foreground: '#454f5f',
        },
        foreground: {
          100: '#edeef1',
          200: '#d6dae1',
          300: '#b2bac7',
          400: '#8895a8',
          50: '#f6f7f9',
          500: '#6a798d',
          600: '#546175',
          700: '#454f5f',
          800: '#3c4450',
          900: '#353b45',
          DEFAULT: '#454f5f', /// DEFAULT is the same as 700
        },
      },
    },
  },
  // },
};

const tailwindConfig: TailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [nextui(nextUIPluginConfig), typography()],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'hsl(var(--nextui-foreground))',
            '--tw-prose-bold': 'hsl(var(--nextui-foreground-700))',
            '--tw-prose-bullets': 'hsl(var(--nextui-foreground))',
            '--tw-prose-captions': 'hsl(var(--nextui-foreground))',
            '--tw-prose-code': 'hsl(var(--nextui-foreground))',
            '--tw-prose-counters': 'hsl(var(--nextui-foreground))',
            '--tw-prose-headings': 'hsl(var(--nextui-foreground-700))',
            '--tw-prose-hr': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-body': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-bold': 'hsl(var(--nextui-foreground-700))',
            '--tw-prose-invert-bullets': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-captions': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-code': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-counters': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-headings': 'hsl(var(--nextui-foreground-700))',
            '--tw-prose-invert-hr': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-kbd': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-kdb-shadows': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-lead': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-links': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-pre-bg': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-pre-code': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-quote-borders': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-quotes': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-td-borders': 'hsl(var(--nextui-foreground))',
            '--tw-prose-invert-th-borders': 'hsl(var(--nextui-foreground))',
            '--tw-prose-kbd': 'hsl(var(--nextui-foreground))',
            '--tw-prose-kdb-shadows': 'hsl(var(--nextui-foreground))',
            '--tw-prose-lead': 'hsl(var(--nextui-foreground))',
            '--tw-prose-links': 'hsl(var(--nextui-foreground))',
            '--tw-prose-pre-bg': 'hsl(var(--nextui-foreground))',
            '--tw-prose-pre-code': 'hsl(var(--nextui-foreground))',
            '--tw-prose-quote-borders': 'hsl(var(--nextui-foreground))',
            '--tw-prose-quotes': 'hsl(var(--nextui-foreground))',
            '--tw-prose-td-borders': 'hsl(var(--nextui-foreground))',
            '--tw-prose-th-borders': 'hsl(var(--nextui-foreground))',
            blockquote: {
              fontStyle: 'normal',
              fontWeight: 'inherit',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
            code: {
              fontWeight: '600',
            },
            pre: {
              backgroundColor: 'inherit',
              color: 'inherit',
              fontWeight: '600',
            },
            'pre code': {
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
};

export default tailwindConfig;
