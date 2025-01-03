import { host } from '@/config';
import { getPathname, Locale, routing } from '@/i18n/routing';
import { MetadataRoute } from 'next';

type Href = Parameters<typeof getPathname>[0]['href'];

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry('/'), getEntry('/post')];
}

function getEntry(href: Href) {
  return {
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)]),
      ),
    },
    url: getUrl(href, routing.defaultLocale),
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ href, locale });
  return host + pathname;
}
