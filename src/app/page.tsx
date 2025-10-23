import { Avatar } from '@heroui/avatar';

import { siteConfig } from '@/config';

export default function Home() {
  return (
    <section className='flex h-full flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='flex flex-col items-center justify-center gap-6 md:flex-row'>
        <Avatar
          className='h-auto text-large  w-48 '
          src={siteConfig.links.githubAvatar}
        />
        <div className='flex flex-col gap-4'>
          <h1 className='text-center text-6xl font-bold'>{siteConfig.title}</h1>
          <p className='text-4xl'>{siteConfig.description}</p>
        </div>
      </div>
    </section>
  );
}
