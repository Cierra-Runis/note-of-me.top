import {
  SiEslint,
  SiEslintHex,
  SiGit,
  SiGitHex,
  SiGithub,
  SiLucide,
  SiMdx,
  SiNextdotjs,
  SiReact,
  SiReactHex,
  SiShadcnui,
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
    icon: <SiReact color={SiReactHex} />,
    name: 'React',
    url: 'https://react.dev',
  },
  {
    icon: <SiNextdotjs />,
    name: 'Next.js',
    url: 'https://nextjs.org',
  },
  {
    icon: <SiVercel />,
    name: 'Vercel',
    url: 'https://vercel.com',
  },
  {
    icon: <SiTailwindcss color={SiTailwindcssHex} />,
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com',
  },
  {
    icon: <SiShadcnui />,
    name: 'Shadcn UI',
    url: 'https://shadcn.com/ui',
  },
  {
    icon: <SiYarn color={SiYarnHex} />,
    name: 'Yarn',
    url: 'https://yarnpkg.com',
  },
  {
    icon: <SiMdx />,
    name: 'MDX',
    url: 'https://mdxjs.com',
  },
  {
    icon: <SiTypescript color={SiTypescriptHex} />,
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org',
  },
  {
    icon: <SiEslint color={SiEslintHex} />,
    name: 'ESLint',
    url: 'https://eslint.org',
  },
  {
    icon: <SiGit color={SiGitHex} />,
    name: 'Git',
    url: 'https://git-scm.com',
  },
  {
    icon: <SiGithub />,
    name: 'GitHub',
    url: 'https://github.com',
  },
  {
    icon: <SiSimpleicons />,
    name: 'Simple Icons',
    url: 'https://simpleicons.org',
  },
  {
    icon: <SiLucide />,
    name: 'Lucide Icons',
    url: 'https://lucide.dev/icons',
  },
];
