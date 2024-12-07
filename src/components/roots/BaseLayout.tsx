import Footer from '@/components/roots/Footer';
import { NavBar } from '@/components/roots/NavBar';
import { Providers } from '@/components/roots/Providers';
import Statistics from '@/components/roots/Statistics';
import { fontMono, fontSans } from '@/config';
import { clsx } from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

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
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Statistics />
          <NextTopLoader showSpinner={false} shadow={false} color='#AD80FF' />
          <Providers>
            <div className='relative flex h-screen flex-col'>
              <NavBar />
              <main className='container mx-auto max-w-7xl flex-grow px-6 pt-16'>
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
