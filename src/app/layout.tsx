import type { Metadata } from 'next';

import { firaCode, notoSansSC, saira } from '@/styles/font';
import '@/styles/globals.css';
import { clsx } from 'clsx';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import ScrollToTopButton from '@/components/buttons/ScrollToTopButton';
import Footer from '@/components/roots/Footer';
import { NavBar } from '@/components/roots/NavBar';
import { Providers } from '@/components/roots/Providers';
import Statistics from '@/components/roots/Statistics';
import { siteConfig } from '@/config';

type Props = {
  children: ReactNode;
};

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

export default function LocaleLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning className='scroll-smooth'>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans text-foreground antialiased selection:bg-secondary/80 selection:text-background',
          saira.variable,
          notoSansSC.variable,
          firaCode.variable,
        )}
      >
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
