import Footer from '@/components/roots/footer';
import { Navbar } from '@/components/roots/nav_bar';
import { Providers } from '@/components/roots/providers';
import Statistics from '@/components/roots/statistics';
import { fontSans, fontMono } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('site.title'),
    applicationName: t('site.title'),
    description: t('site.description'),
    authors: siteConfig.author,
    icons: '/icon.svg',
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
              <Navbar />
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
