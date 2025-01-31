import type { Metadata } from 'next';

import BaseLayout from '@/components/roots/BaseLayout';
import { siteConfig } from '@/config';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function generateMetadata(): Metadata {
  return {
    applicationName: siteConfig.title,
    authors: siteConfig.author,
    description: siteConfig.description,
    title: {
      default: siteConfig.title,
      template: `%s - ${siteConfig.title}`,
    },
  };
}

export default function LocaleLayout({ children }: Props) {
  return <BaseLayout>{children}</BaseLayout>;
}
