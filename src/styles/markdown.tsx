import MarkdownImage from '@/components/MarkdownImage';
import { Alert } from '@nextui-org/alert';
import { Checkbox } from '@nextui-org/checkbox';
import { Code } from '@nextui-org/code';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import type { MDXComponents } from 'mdx/types';
import { HTMLProps } from 'react';

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
  Unicode,
};
