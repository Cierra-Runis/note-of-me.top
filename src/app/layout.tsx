import type { Metadata } from 'next';

import '@/app/globals.css';
import { clsx } from 'clsx';
import { Fira_Code, Noto_Sans_SC, Saira } from 'next/font/google';
import { ReactNode } from 'react';

import ScrollToTopButton from '@/components/buttons/ScrollToTopButton';
import Navbar from '@/components/roots/NavBar';
import { Providers } from '@/components/roots/Providers';
import { siteConfig } from '@/config';

/// TIPS: https://github.com/vercel/next.js/issues/49207
/// TIPS: https://github.com/vercel/next.js/issues/53522

const saira = Saira({
  subsets: ['latin'],
  variable: '--font-sans',
});
const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-sans-sc',
});

/// Mono ////////////////////////
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
});

export function generateMetadata(): Metadata {
  return {
    applicationName: siteConfig.title,
    authors: siteConfig.author,
    description: siteConfig.description,
    title: {
      default: siteConfig.title,
      template: `%s - ${siteConfig.title}`,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      className={clsx(saira.variable, notoSansSC.variable, firaCode.variable)}
      lang='zh-CN'
      suppressHydrationWarning
    >
      <body
        className={`
          relative flex min-h-svh flex-col bg-background text-foreground
          antialiased
          selection:bg-primary selection:text-background
        `}
      >
        <Providers>
          <Navbar />
          <main className='flex flex-1 flex-col'>{children}</main>
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
