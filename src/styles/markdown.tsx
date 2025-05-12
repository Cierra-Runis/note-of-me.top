import MarkdownImage from '@/components/MarkdownImage';
import { Alert } from '@heroui/alert';
import { Checkbox } from '@heroui/checkbox';
import { Kbd } from '@heroui/kbd';
import { MDXComponents } from 'mdx/types';
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
      return <Checkbox defaultSelected={checked} isDisabled size='sm' />;
    }
    return <input {...props} />;
  },
  table: ({ children, ...props }: HTMLProps<HTMLTableElement>) => (
    <figure>
      <table {...props}>{children}</table>
    </figure>
  ),
  h2: HeadingWithAnchor('h2'),
  h3: HeadingWithAnchor('h3'),
  h4: HeadingWithAnchor('h4'),
  h5: HeadingWithAnchor('h5'),
  h6: HeadingWithAnchor('h6'),
  Kbd,
};

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
function HeadingWithAnchor(tag: HeadingTag) {
  return ({
    className = '',
    children,
    id,
    ...props
  }: HTMLProps<HTMLHeadingElement>) => {
    const Tag = tag;
    return (
      <Tag id={id} className={`relative ${className}`} {...props}>
        <NextLink href={`#${id}`} className='group not-prose'>
          {children}
          {id && (
            <span className='ml-2 opacity-0 group-hover:opacity-100 transition-opacity'>
              #
            </span>
          )}
        </NextLink>
      </Tag>
    );
  };
}
