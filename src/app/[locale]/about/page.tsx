import {
  SiEslint,
  SiEslintHex,
  SiGit,
  SiGitHex,
  SiGithub,
  SiMdx,
  SiNextdotjs,
  SiNextui,
  SiReact,
  SiReactHex,
  SiSimpleicons,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiVercel,
  SiYarn,
  SiYarnHex,
} from '@icons-pack/react-simple-icons';
import { Button } from '@nextui-org/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ReactElement } from 'react';

const technicalStack: {
  name: string;
  url: string;
  icon: ReactElement;
}[] = [
  {
    name: 'React',
    url: 'https://react.dev/',
    icon: <SiReact className='w-5 text-default-500' color={SiReactHex} />,
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    icon: <SiNextdotjs className='w-5 text-default-500' />,
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com/',
    icon: <SiVercel className='w-5 text-default-500' />,
  },
  {
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com/',
    icon: (
      <SiTailwindcss
        className='w-5 text-default-500'
        color={SiTailwindcssHex}
      />
    ),
  },
  {
    name: 'NextUI',
    url: 'https://nextui.org/',
    icon: <SiNextui className='w-5 text-default-500' />,
  },
  {
    name: 'Yarn',
    url: 'https://yarnpkg.com/',
    icon: <SiYarn className='w-5 text-default-500' color={SiYarnHex} />,
  },
  {
    name: 'MDX',
    url: 'https://mdxjs.com/',
    icon: <SiMdx className='w-5 text-default-500' />,
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: (
      <SiTypescript className='w-5 text-default-500' color={SiTypescriptHex} />
    ),
  },
  {
    name: 'EsLint',
    url: 'https://eslint.org/',
    icon: <SiEslint className='w-5 text-default-500' color={SiEslintHex} />,
  },
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    icon: <SiGit className='w-5 text-default-500' color={SiGitHex} />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: <SiGithub className='w-5 text-default-500' />,
  },
  {
    name: 'Simple Icons',
    url: 'https://simpleicons.org/',
    icon: <SiSimpleicons className='w-5 text-default-500' />,
  },
];

export default function AboutPage() {
  const t = useTranslations();
  return (
    <div className='relative isolate overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-5xl font-semibold tracking-tight sm:text-7xl'>
            {t('about.title')}
          </h2>
          <p className='mt-8 text-pretty text-lg font-medium sm:text-xl/8'>
            {t('about.description')}
          </p>
        </div>
      </div>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <h2 className='text-center text-lg/8 font-semibold'>
            {t('whatAreWeUsingNow')}
          </h2>
          <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
            {technicalStack.map(({ name, url, icon }, index) => (
              <Button
                key={index}
                as={Link}
                href={url}
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                startContent={icon}
                variant='light'
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
