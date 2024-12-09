import { nextui, NextUIPluginConfig } from '@nextui-org/theme';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const nextUIPluginConfig: NextUIPluginConfig = {
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
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(nextUIPluginConfig), typography()],
};

export default config;
