import { nextui } from '@nextui-org/theme';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import type { PluginUtils } from "tailwindcss/types/config";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }: PluginUtils) => ({
        pink: {
          css: {
            '--tw-prose-links': '#FF8000',
            '--tw-prose-counters': '#FF8000',
            '--tw-prose-bullets': '#FF8000',
            '--tw-prose-hr': '#EEEEEE',
            '--tw-prose-quote-borders': '#FF8000',
            '--tw-prose-code': '#ad80ff',
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-th-borders': '#000000',
            '--tw-prose-td-borders': '#000000',
            '--tw-prose-invert-links': '#FF8000',
            '--tw-prose-invert-counters': '#FF8000',
            '--tw-prose-invert-bullets': '#FF8000',
            '--tw-prose-invert-hr': '#282c34',
            '--tw-prose-invert-quote-borders': '#FF8000',
            '--tw-prose-invert-code': '#ad80ff',
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': '#000000',
            '--tw-prose-invert-td-borders': '#000000',
          },
        },
      }),
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#EEEEEE',
            primary: '#FF8000',
          },
        },
        dark: {
          colors: {
            background: '#282c34',
            primary: '#FF8000',
          },
        },
      },
    }),
    typography(),
  ],
} satisfies Config;
