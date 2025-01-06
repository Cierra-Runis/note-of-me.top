import { Locale } from '@/i18n/routing';
import { kodeMono, localeToSans, saira } from '@/styles/font';
import '@/styles/globals.css';
import { clsx } from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import ScrollToTopButton from '../buttons/ScrollToTopButton';
import Footer from './Footer';
import { NavBar } from './NavBar';
import { Providers } from './Providers';
import Statistics from './Statistics';

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary-300 selection:text-background',
          saira.variable,
          localeToSans[locale as Locale].variable,
          kodeMono.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Statistics />
          <Providers>
            <NextTopLoader color='#AD80FF' shadow={false} showSpinner={false} />

            <div className='relative flex h-screen flex-col'>
              <NavBar />
              <main className='container mx-auto max-w-7xl grow px-6 pt-16'>
                {children}
              </main>
              <Footer />
            </div>
            <ScrollToTopButton />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
