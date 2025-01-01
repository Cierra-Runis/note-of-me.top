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
  links: {
    githubAvatar: 'https://avatars.githubusercontent.com/u/29329988',
    docs: 'https://nextui.org',
    email: 'mailto:byrdsaron@gmail.com',
  },
};

export const technicalStack: {
  name: string;
  url: string;
  icon: ReactElement;
}[] = [
  {
    name: 'React',
    url: 'https://react.dev/',
    icon: <SiReact className='w-5' color={SiReactHex} />,
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    icon: <SiNextdotjs className='w-5' />,
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com/',
    icon: <SiVercel className='w-5' />,
  },
  {
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com/',
    icon: <SiTailwindcss className='w-5' color={SiTailwindcssHex} />,
  },
  {
    name: 'NextUI',
    url: 'https://nextui.org/',
    icon: <SiNextui className='w-5' />,
  },
  {
    name: 'Yarn',
    url: 'https://yarnpkg.com/',
    icon: <SiYarn className='w-5' color={SiYarnHex} />,
  },
  {
    name: 'MDX',
    url: 'https://mdxjs.com/',
    icon: <SiMdx className='w-5' />,
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: <SiTypescript className='w-5' color={SiTypescriptHex} />,
  },
  {
    name: 'EsLint',
    url: 'https://eslint.org/',
    icon: <SiEslint className='w-5' color={SiEslintHex} />,
  },
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    icon: <SiGit className='w-5' color={SiGitHex} />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: <SiGithub className='w-5' />,
  },
  {
    name: 'Simple Icons',
    url: 'https://simpleicons.org/',
    icon: <SiSimpleicons className='w-5' />,
  },
];
