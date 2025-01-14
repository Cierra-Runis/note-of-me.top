'use client';

import { siteConfig } from '@/config';
import { Avatar } from '@nextui-org/avatar';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <section className='flex h-full flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='flex items-center justify-center gap-6'>
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
