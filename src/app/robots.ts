import type { MetadataRoute } from 'next';

import { host } from '@/config';

export default function robots(): MetadataRoute.Robots {
  return {
    host: host,
    rules: {
      allow: '/',
      userAgent: '*',
    },
    sitemap: `${host}/sitemap.xml`,
  };
}
