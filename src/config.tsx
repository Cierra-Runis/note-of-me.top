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
import { IconBrandTabler } from '@tabler/icons-react';
import { ReactElement } from 'react';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : `http://localhost:${port}`;

export const siteConfig = {
  author: {
    name: 'Cierra Runis',
    url: 'https://github.com/Cierra-Runis',
  },
  description: '一个简单的笔记',
  links: {
    email: 'mailto:byrdsaron@gmail.com',
    githubAvatar: 'https://avatars.githubusercontent.com/u/29329988',
  },
  title: 'ノート of 我',
};

export type Technical = {
  icon: ReactElement;
  name: string;
  url: string;
};

export const technicalStack: Technical[] = [
  {
    icon: <SiReact className='w-5' color={SiReactHex} />,
    name: 'React',
    url: 'https://react.dev',
  },
  {
    icon: <SiNextdotjs className='w-5' />,
    name: 'Next.js',
    url: 'https://nextjs.org',
  },
  {
    icon: <SiVercel className='w-5' />,
    name: 'Vercel',
    url: 'https://vercel.com',
  },
  {
    icon: <SiTailwindcss className='w-5' color={SiTailwindcssHex} />,
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com',
  },
  {
    icon: <SiNextui className='w-5' />,
    name: 'NextUI',
    url: 'https://nextui.org',
  },
  {
    icon: <SiYarn className='w-5' color={SiYarnHex} />,
    name: 'Yarn',
    url: 'https://yarnpkg.com',
  },
  {
    icon: <SiMdx className='w-5' />,
    name: 'MDX',
    url: 'https://mdxjs.com',
  },
  {
    icon: <SiTypescript className='w-5' color={SiTypescriptHex} />,
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org',
  },
  {
    icon: <SiEslint className='w-5' color={SiEslintHex} />,
    name: 'EsLint',
    url: 'https://eslint.org',
  },
  {
    icon: <SiGit className='w-5' color={SiGitHex} />,
    name: 'Git',
    url: 'https://git-scm.com',
  },
  {
    icon: <SiGithub className='w-5' />,
    name: 'GitHub',
    url: 'https://github.com',
  },
  {
    icon: <SiSimpleicons className='w-5' />,
    name: 'Simple Icons',
    url: 'https://simpleicons.org',
  },
  {
    icon: <IconBrandTabler className='w-5' />,
    name: 'Tabler Icons',
    url: 'https://tabler.io/icons',
  },
];
