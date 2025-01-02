import MarkdownImage from '@/components/MarkdownImage';
import { Alert } from '@nextui-org/alert';
import { Checkbox } from '@nextui-org/checkbox';
import { Kbd } from '@nextui-org/kbd';
import type { MDXComponents } from 'mdx/types';
import NextLink from 'next/link';
import { HTMLProps } from 'react';

/**
 *  {@link React.JSX.IntrinsicElements}
 */
export const mdxComponents: MDXComponents = {
  a: ({ id, href, children, ...props }: HTMLProps<HTMLAnchorElement>) => (
    <NextLink
      prefetch
      id={id}
      href={href ?? ''}
      aria-label={props['aria-label']}
      aria-describedby={props['aria-describedby']}
    >
      {children}
    </NextLink>
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
    <figure className='overflow-auto'>
      <table {...props}>{children}</table>
    </figure>
  ),
  Alert: ({ ...props }) => (
    <figure>
      <Alert {...props} />
    </figure>
  ),
  Kbd,
};
