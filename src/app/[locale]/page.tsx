'use client';

import { siteConfig } from '@/config';
import { Avatar } from '@heroui/avatar';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <section className='flex h-full flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
        <Avatar
          className='h-auto w-48 text-large'
          src={siteConfig.links.githubAvatar}
        />
        <div className='flex flex-col gap-4'>
          <h1 className='text-center text-6xl font-bold'>{t('site.title')}</h1>
          <p className='text-4xl'>{t('site.description')}</p>
        </div>
      </div>
    </section>
  );
}
