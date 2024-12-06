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

export default function AboutPage() {
  const t = useTranslations();
  return (
    <div className='relative isolate overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-5xl font-semibold tracking-tight sm:text-7xl'>
            {t('about.name')}
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
            <Button
              href='https://react.dev/'
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={
                <SiReact
                  className='w-5 text-default-500'
                  color={SiReactHex}
                />
              }
              as={Link}
              variant='light'
            >
              React
            </Button>
            <Button
              href='https://nextjs.org/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={<SiNextdotjs className='w-5 text-default-500' />}
              variant='light'
            >
              Next.js
            </Button>
            <Button
              href='https://vercel.com/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={<SiVercel className='w-5 text-default-500' />}
              variant='light'
            >
              Vercel
            </Button>
            <Button
              href='https://tailwindcss.com/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={
                <SiTailwindcss
                  className='w-5 text-default-500'
                  color={SiTailwindcssHex}
                />
              }
              variant='light'
            >
              TailwindCSS
            </Button>
            <Button
              href='https://nextui.org/'
              as={Link}
              className='f col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={<SiNextui className='w-5 text-default-500' />}
              variant='light'
            >
              NextUI
            </Button>
            <Button
              href='https://yarnpkg.com/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={
                <SiYarn
                  className='w-5 text-default-500'
                  color={SiYarnHex}
                />
              }
              variant='light'
            >
              Yarn
            </Button>
            <Button
              href='https://mdxjs.com/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={<SiMdx className='w-5 text-default-500' />}
              variant='light'
            >
              MDX
            </Button>
            <Button
              href='https://www.typescriptlang.org/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={
                <SiTypescript
                  className='w-5 text-default-500'
                  color={SiTypescriptHex}
                />
              }
              variant='light'
            >
              TypeScript
            </Button>
            <Button
              href='https://eslint.org/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={
                <SiEslint
                  className='w-5 text-default-500'
                  color={SiEslintHex}
                />
              }
              variant='light'
            >
              EsLint
            </Button>
            <Button
              href='https://git-scm.com/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={
                <SiGit
                  className='w-5 text-default-500'
                  color={SiGitHex}
                />
              }
              variant='light'
            >
              Git
            </Button>
            <Button
              href='https://github.com/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={<SiGithub className='w-5 text-default-500' />}
              variant='light'
            >
              GitHub
            </Button>
            <Button
              href='https://simpleicons.org/'
              as={Link}
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              startContent={<SiSimpleicons className='w-5 text-default-500' />}
              variant='light'
            >
              Simple Icons
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
