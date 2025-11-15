import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config';

export default function Home() {
  return (
    <section className='my-auto'>
      <div
        className={`
          flex flex-col items-center justify-center gap-6
          md:flex-row
        `}
      >
        <Avatar className='h-auto w-48'>
          <AvatarImage
            alt='GitHub Avatar'
            src={siteConfig.links.githubAvatar}
          />
        </Avatar>
        <div className='flex flex-col gap-4'>
          <h1 className='text-center text-6xl font-bold'>{siteConfig.title}</h1>
          <p className='text-4xl'>{siteConfig.description}</p>
        </div>
      </div>
    </section>
  );
}
