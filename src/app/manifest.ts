import { MetadataRoute } from 'next';

import { siteConfig } from '@/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#000',
    categories: ['Technology', '技术', 'Blog', '博客'],
    description: siteConfig.description,
    icons: [
      { sizes: '192x192', src: '/icon-192x192.png', type: 'image/png' },
      { sizes: '512x512', src: '/icon-512x512.png', type: 'image/png' },
    ],
    name: siteConfig.title,
    short_name: siteConfig.title,
    start_url: '/',
  };
}
