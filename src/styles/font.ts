import { ClassValue } from 'clsx';
import {
  Saira,
  Noto_Sans_SC,
  Noto_Sans_JP,
  Kode_Mono,
  Noto_Serif_SC,
  Noto_Serif_JP,
} from 'next/font/google';

/// Sans ////////////////////////
/// en
export const saira = Saira({
  subsets: ['latin'],
  variable: '--font-sans',
});

/// zh-CN
export const sairaNotoSansSC = Saira({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['var(--font-sans-sc)'],
});

export const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-sans-sc',
});

/// ja
export const sairaNotoSansJP = Saira({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['var(--font-sans-jp)'],
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-sans-jp',
});

/// Mono ////////////////////////
export const kodeMono = Kode_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

/// zh-CN
export const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  variable: '--font-serif',
});

/// ja
export const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const localeToFont: Record<string, ClassValue[]> = {
  en: [saira.variable, kodeMono.variable],
  'zh-CN': [sairaNotoSansSC.variable, notoSansSC.variable, kodeMono.variable],
  ja: [sairaNotoSansJP.variable, notoSansJP.variable, kodeMono.variable],
};
