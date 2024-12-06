import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { fontMono, fontSans } from '@/config/fonts';
import clsx from 'clsx';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/nav_bar';
import { WebVitals } from '@/components/web-vitals';
import { siteConfig } from '@/config/site';
import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/footer';

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
  const locale = (await params).locale;
  const t = await getTranslations({ locale });

  return {
    title: t('site.name'),
    applicationName: t('site.name'),
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
  const locale = (await params).locale;
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      lang={locale}
    >
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <WebVitals />
        <NextTopLoader
          showSpinner={false}
          shadow={false}
          color='#AD80FF'
        />
        <NextIntlClientProvider messages={messages}>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <div className='relative flex h-screen flex-col'>
              <Navbar />
              <main className='container mx-auto max-w-7xl flex-grow px-6 pt-16'>
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
