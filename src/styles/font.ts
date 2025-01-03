import { Kode_Mono, Saira } from 'next/font/google';

/// TIPS: https://github.com/vercel/next.js/issues/49207
/// TIPS: https://github.com/vercel/next.js/issues/53522

/// Sans ////////////////////////
export const saira = Saira({
  subsets: ['latin-ext'],
  variable: '--font-sans',
});

/// Mono ////////////////////////
export const kodeMono = Kode_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});
