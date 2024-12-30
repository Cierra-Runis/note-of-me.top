import { nextui, NextUIPluginConfig } from '@nextui-org/theme';
import typography from '@tailwindcss/typography';
import type { Config as TailwindConfig } from 'tailwindcss';

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
        foreground: {
          DEFAULT: '#8895a8', /// DEFAULT is the same as 500
          900: '#f6f7f9',
          800: '#edeef1',
          700: '#d6dae1',
          600: '#b2bac7',
          500: '#8895a8',
          400: '#6a798d',
          300: '#546175',
          200: '#454f5f',
          100: '#3c4450',
          50: '#353b45',
        },
        /// Default colors as same as foreground
        default: {
          DEFAULT: '#454f5f', /// But DEFAULT is the same as 200
          900: '#f6f7f9',
          800: '#edeef1',
          700: '#d6dae1',
          600: '#b2bac7',
          500: '#8895a8',
          400: '#6a798d',
          300: '#546175',
          200: '#454f5f',
          100: '#3c4450',
          50: '#353b45',
        },
        /// Content colors use 50-300 from default (as same as foreground)
        content4: '#546175',
        content3: '#454f5f',
        content2: '#3c4450',
        content1: '#353b45',
      },
    },
    light: {
      colors: {
        background: '#FFFFFF', /// Generator doesn't generate this one, so use white
        foreground: {
          DEFAULT: '#454f5f', /// DEFAULT is the same as 700
          50: '#f6f7f9',
          100: '#edeef1',
          200: '#d6dae1',
          300: '#b2bac7',
          400: '#8895a8',
          500: '#6a798d',
          600: '#546175',
          700: '#454f5f',
          800: '#3c4450',
          900: '#353b45',
        },
        /// Default colors as same as foreground
        default: {
          DEFAULT: '#6a798d', /// But DEFAULT is the same as 500
          50: '#f6f7f9',
          100: '#edeef1',
          200: '#d6dae1',
          300: '#b2bac7',
          400: '#8895a8',
          500: '#6a798d',
          600: '#546175',
          700: '#454f5f',
          800: '#3c4450',
          900: '#353b45',
        },
        /// Content colors use 50-300 from default (as same as foreground)
        content1: '#f6f7f9',
        content2: '#edeef1',
        content3: '#d6dae1',
        content4: '#b2bac7',
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

export default tailwindConfig;
