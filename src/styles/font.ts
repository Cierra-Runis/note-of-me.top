import { Kode_Mono, Noto_Sans_SC, Saira } from 'next/font/google';

/// TIPS: https://github.com/vercel/next.js/issues/49207
/// TIPS: https://github.com/vercel/next.js/issues/53522

/// Sans ////////////////////////
export const saira = Saira({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-sans-sc',
});

/// Mono ////////////////////////
export const kodeMono = Kode_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});
