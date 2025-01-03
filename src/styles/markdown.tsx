import type { MDXComponents } from 'mdx/types';

import MarkdownImage from '@/components/MarkdownImage';
import { Alert } from '@nextui-org/alert';
import { Checkbox } from '@nextui-org/checkbox';
import { Kbd } from '@nextui-org/kbd';
import NextLink from 'next/link';
import { HTMLProps } from 'react';

/**
 *  {@link React.JSX.IntrinsicElements}
 */
export const mdxComponents: MDXComponents = {
  a: ({ children, href, id, ...props }: HTMLProps<HTMLAnchorElement>) => (
    <NextLink
      aria-describedby={props['aria-describedby']}
      aria-label={props['aria-label']}
      href={href ?? ''}
      id={id}
      prefetch
    >
      {children}
    </NextLink>
  ),
  Alert: ({ ...props }) => (
    <figure>
      <Alert {...props} />
    </figure>
  ),
  img: ({ alt, children, src }: HTMLProps<HTMLImageElement>) => (
    <MarkdownImage alt={alt} className='mx-auto' isBlurred isZoomed src={src}>
      {children}
    </MarkdownImage>
  ),
  input: ({ checked, type, ...props }: HTMLProps<HTMLInputElement>) => {
    if (type === 'checkbox') {
      return <Checkbox defaultSelected={checked} isDisabled />;
    }
    return <input {...props} />;
  },
  Kbd,
  table: ({ children, ...props }: HTMLProps<HTMLTableElement>) => (
    <figure className='overflow-auto'>
      <table {...props}>{children}</table>
    </figure>
  ),
};
