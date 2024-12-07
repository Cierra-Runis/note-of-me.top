import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = 'en';
  const t = await getTranslations({ locale });

  return {
    name: t('site.title'),
    short_name: t('site.title'),
    description: t('site.description'),
    start_url: '/',
  };
}
