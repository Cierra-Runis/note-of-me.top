import { Alert } from '@heroui/alert';
import { Checkbox } from '@heroui/checkbox';
import { Kbd } from '@heroui/kbd';
import { MDXComponents } from 'mdx/types';
import NextLink from 'next/link';
import { HTMLProps } from 'react';

import MarkdownImage from '@/components/MarkdownImage';

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
  h2: HeadingWithAnchor('h2'),
  h3: HeadingWithAnchor('h3'),
  h4: HeadingWithAnchor('h4'),
  h5: HeadingWithAnchor('h5'),
  h6: HeadingWithAnchor('h6'),
  img: ({ alt, children, src }: HTMLProps<HTMLImageElement>) => (
    <MarkdownImage alt={alt} className='mx-auto' isBlurred isZoomed src={src}>
      {children}
    </MarkdownImage>
  ),
  input: ({ checked, type, ...props }: HTMLProps<HTMLInputElement>) => {
    if (type === 'checkbox') {
      return <Checkbox defaultSelected={checked} isDisabled size='sm' />;
    }
    return <input {...props} />;
  },
  Kbd,
  table: ({ children, ...props }: HTMLProps<HTMLTableElement>) => (
    <figure>
      <table {...props}>{children}</table>
    </figure>
  ),
};

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
function HeadingWithAnchor(tag: HeadingTag) {
  function HeadingComponent({
    children,
    className = '',
    id,
    ...props
  }: HTMLProps<HTMLHeadingElement>) {
    const Tag = tag;
    return (
      <Tag className={`relative ${className}`} id={id} {...props}>
        <NextLink className='group not-prose' href={`#${id}`}>
          {children}
          {id && (
            <span className='ml-2 opacity-0 group-hover:opacity-100 transition-opacity select-none'>
              #
            </span>
          )}
        </NextLink>
      </Tag>
    );
  }
  return HeadingComponent;
}
