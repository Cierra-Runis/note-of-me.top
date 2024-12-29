import { nextui, NextUIPluginConfig } from '@nextui-org/theme';
import typography from '@tailwindcss/typography';
import type { Config as TailwindConfig } from 'tailwindcss';

const nextUIPluginConfig: NextUIPluginConfig = {
  themes: {
    light: {
      colors: {
        background: '#FEFEFE',
        foreground: {
          DEFAULT: '#6F7A90',
          50: '#D7DAE0',
          100: '#CBCFD7',
          200: '#B4BAC5',
          300: '#9DA5B4',
          400: '#868FA2',
          500: '#6F7A90',
          600: '#5D6779',
          700: '#4B5362',
          800: '#3A404B',
          900: '#282C34',
        },
        default: {
          foreground: '#6F7A90',
          50: '#D7DAE0',
          100: '#CBCFD7',
          200: '#B4BAC5',
          300: '#9DA5B4',
          400: '#868FA2',
          500: '#6F7A90',
          600: '#5D6779',
          700: '#4B5362',
          800: '#3A404B',
          900: '#282C34',
        },
      },
    },
    dark: {
      colors: {
        background: '#282C34',
        foreground: {
          DEFAULT: '#868FA2',
          900: '#D7DAE0',
          800: '#CBCFD7',
          700: '#B4BAC5',
          600: '#9DA5B4',
          500: '#868FA2',
          400: '#6F7A90',
          300: '#5D6779',
          200: '#4B5362',
          100: '#3A404B',
          50: '#282C34',
        },
        default: {
          foreground: '#868FA2',
        },
      },
    },
  },
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
