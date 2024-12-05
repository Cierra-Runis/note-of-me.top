import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { Link } from '@/i18n/routing';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { fontMono, fontSans } from '@/config/fonts';
import clsx from 'clsx';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/nav_bar';
import { WebVitals } from '@/components/web-vitals';
import { siteConfig } from '@/config/site';
import GitHubButton from './../../components/github-button';

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
  // // Ensure that the incoming `locale` is valid
  // if (!routing.locales.includes(locale as never)) {
  //   redirect({ href: '/', locale: routing.defaultLocale });
  // }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale} className=''>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <WebVitals />
        <NextIntlClientProvider messages={messages}>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
            <div className='relative flex flex-col h-screen'>
              <Navbar />
              <main className='container mx-auto max-w-7xl pt-16 px-6 flex-grow'>
                {children}
              </main>
              <footer className='w-full flex items-center justify-between py-3 p-6 text-sm'>
                <Link
                  className='flex items-center gap-2'
                  href={siteConfig.author.url}
                >
                  <span className='text-default-600'>Powered by</span>
                  <p className='text-primary'>Cierra Runis</p>
                </Link>
                <div>
                  <GitHubButton />
                </div>
              </footer>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
