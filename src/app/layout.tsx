import type { Metadata } from 'next';

import '@/styles/globals.css';
import { clsx } from 'clsx';
import { Fira_Code, Noto_Sans_SC, Saira } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import ScrollToTopButton from '@/components/buttons/ScrollToTopButton';
import Footer from '@/components/roots/Footer';
import { NavBar } from '@/components/roots/NavBar';
import { Providers } from '@/components/roots/Providers';
import Statistics from '@/components/roots/Statistics';
import { siteConfig } from '@/config';

/// TIPS: https://github.com/vercel/next.js/issues/49207
/// TIPS: https://github.com/vercel/next.js/issues/53522

/// Sans ////////////////////////
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

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={clsx(
        'overflow-x-clip',
        saira.variable,
        notoSansSC.variable,
        firaCode.variable,
      )}
      suppressHydrationWarning
    >
      <body className='min-h-screen bg-background font-sans text-foreground antialiased selection:bg-secondary/80 selection:text-background'>
        <Statistics />
        <Providers>
          <NextTopLoader
            color='hsl(var(--heroui-secondary))'
            shadow={false}
            showSpinner={false}
          />

          <div className='relative flex h-screen flex-col'>
            <NavBar />
            <main className='container mx-auto max-w-7xl grow px-6 pt-16'>
              {children}
            </main>
            <Footer />
          </div>
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
