import { Locale } from '@/i18n/routing';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import {
  Kode_Mono,
  Noto_Sans,
  Noto_Sans_JP,
  Noto_Sans_SC,
  Saira,
} from 'next/font/google';

/// TIPS: https://github.com/vercel/next.js/issues/49207
/// TIPS: https://github.com/vercel/next.js/issues/53522

/// Sans ////////////////////////
export const saira = Saira({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const notoSansEN = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-sans-locale',
});

export const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-sans-locale',
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-sans-locale',
});

export const localeToSans: Record<Locale, NextFontWithVariable> = {
  en: notoSansEN,
  ja: notoSansJP,
  'zh-CN': notoSansSC,
};

/// Mono ////////////////////////
export const kodeMono = Kode_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});
