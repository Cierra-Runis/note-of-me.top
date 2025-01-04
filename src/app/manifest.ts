import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = 'en';
  const t = await getTranslations({ locale });

  return {
    background_color: '#000',
    categories: [
      'Technology',
      '技術',
      '技术',
      'Blog',
      'ブログ',
      '博客',
      'Note of Me',
      '個人ノート',
      '个人笔记',
    ],
    description: t('site.description'),
    icons: [
      { sizes: '192x192', src: '/icon-192x192.png', type: 'image/png' },
      { sizes: '512x512', src: '/icon-512x512.png', type: 'image/png' },
    ],
    name: `${t('site.title')} - ${t('site.description')}`,
    short_name: t('site.title'),
    start_url: '/',
  };
}
