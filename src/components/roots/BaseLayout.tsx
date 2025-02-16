import { kodeMono, notoSansSC, saira } from '@/styles/font';
import '@/styles/globals.css';
import { clsx } from 'clsx';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import ScrollToTopButton from '../buttons/ScrollToTopButton';
import Footer from './Footer';
import { NavBar } from './NavBar';
import { Providers } from './Providers';
import Statistics from './Statistics';

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans text-foreground antialiased selection:bg-secondary/80 selection:text-background',
          saira.variable,
          notoSansSC.variable,
          kodeMono.variable,
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
