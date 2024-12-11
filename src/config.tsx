import MarkdownImage from './components/MarkdownImage';
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
import { Alert } from '@nextui-org/alert';
import { Checkbox } from '@nextui-org/checkbox';
import { Code } from '@nextui-org/code';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import type { MDXComponents } from 'mdx/types';
import { Kode_Mono as FontMono, Saira as FontSans } from 'next/font/google';
import { HTMLProps, ReactElement } from 'react';

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
  },
};

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

/// TODO: Implement <Unicode/> component
function Unicode(props: { code: string }) {
  return <Code color='danger'>{props.code}</Code>;
}

/**
 *  {@link React.JSX.IntrinsicElements}
 */
export const mdxComponents: MDXComponents = {
  a: ({ id, href, children, ...props }: HTMLProps<HTMLAnchorElement>) => (
    <Link
      id={id}
      href={href}
      aria-label={props['aria-label']}
      aria-describedby={props['aria-describedby']}
    >
      {children}
    </Link>
  ),
  img: ({ src, alt, children }: HTMLProps<HTMLImageElement>) => (
    <MarkdownImage src={src} alt={alt} isBlurred isZoomed className='mx-auto'>
      {children}
    </MarkdownImage>
  ),
  input: ({ checked, type, ...props }: HTMLProps<HTMLInputElement>) => {
    if (type === 'checkbox') {
      return <Checkbox isDisabled defaultSelected={checked} />;
    }
    return <input {...props} />;
  },
  table: ({ children, ...props }: HTMLProps<HTMLTableElement>) => (
    <div className='overflow-auto'>
      <table {...props}>{children}</table>
    </div>
  ),
  Alert,
  Kbd,
  Unicode,
};

export const technicalStack: {
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
