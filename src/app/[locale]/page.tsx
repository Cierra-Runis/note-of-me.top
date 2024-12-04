import { subtitle, title } from '@/components/primitives';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { Code, Snippet } from '@nextui-org/react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Link } from '@/i18n/routing';

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full'>
      <div className='inline-block max-w-xl text-center justify-center'>
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: 'violet' })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: 'mt-4' })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className='flex gap-3'>
        <Link
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.author.url}
        >
          <SiGithub size={20} />
          GitHub
        </Link>
      </div>

      <div className='mt-8'>
        <Snippet hideCopyButton hideSymbol variant='bordered'>
          <span>
            Get started by editing <Code color='primary'>app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
