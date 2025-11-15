import clsx from 'clsx';
import { AlertCircleIcon } from 'lucide-react';
import { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import {
  DelHTMLAttributes,
  DetailedHTMLProps,
  HTMLProps,
  OlHTMLAttributes,
} from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Kbd, KbdGroup } from '@/components/ui/kbd';

/**
 *  {@link React.JSX.IntrinsicElements}
 */
export const mdxComponents: MDXComponents = {
  a: ({ children, href, ...props }: HTMLProps<HTMLAnchorElement>) => (
    <Link
      {...props}
      className='font-bold text-primary underline'
      href={href ?? ''}
      prefetch
    >
      {children}
    </Link>
  ),
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertCircleIcon,
  AlertDescription,
  AlertTitle,
  blockquote: ({ children, ...props }: HTMLProps<HTMLQuoteElement>) => (
    <blockquote className='my-6 border-l-2 pl-6' {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: HTMLProps<HTMLElement>) => {
    return (
      <code className={clsx('rounded-sm font-mono', className)} {...props}>
        {children}
      </code>
    );
  },
  del: ({
    children,
    ...props
  }: DetailedHTMLProps<DelHTMLAttributes<HTMLModElement>, HTMLModElement>) => (
    <del
      className={`
        text-destructive line-through
        *:text-destructive
      `}
      {...props}
    >
      {children}
    </del>
  ),
  h1: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h1
      className={`
        mt-8 mb-4 scroll-m-20 text-3xl font-bold text-primary
        md:text-4xl
        lg:text-5xl
      `}
      {...props}
    >
      <Link className='hover:underline' href={`#${props.id}`}>
        {children}
      </Link>
    </h1>
  ),
  h2: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h2
      className={`
        mt-8 mb-4 scroll-m-20 text-2xl font-semibold text-primary
        md:text-3xl
        lg:text-4xl
      `}
      {...props}
    >
      <Link className='hover:underline' href={`#${props.id}`}>
        {children}
      </Link>
    </h2>
  ),
  h3: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h3
      className={`
        mt-8 mb-4 scroll-m-20 text-xl font-semibold text-primary
        md:text-2xl
        lg:text-3xl
      `}
      {...props}
    >
      <Link className='hover:underline' href={`#${props.id}`}>
        {children}
      </Link>
    </h3>
  ),
  h4: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h4
      className={`
        mt-8 mb-4 scroll-m-20 text-lg font-semibold text-primary
        md:text-xl
        lg:text-2xl
      `}
      {...props}
    >
      <Link className='hover:underline' href={`#${props.id}`}>
        {children}
      </Link>
    </h4>
  ),
  h5: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h5
      className={`
        mt-8 mb-4 scroll-m-20 font-semibold text-primary
        lg:text-xl
      `}
      {...props}
    >
      <Link className='hover:underline' href={`#${props.id}`}>
        {children}
      </Link>
    </h5>
  ),
  h6: ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => (
    <h6
      className={`
        mt-8 mb-4 scroll-m-20 text-sm font-semibold text-primary
        md:text-base
        lg:text-lg
      `}
      {...props}
    >
      <Link className='hover:underline' href={`#${props.id}`}>
        {children}
      </Link>
    </h6>
  ),
  img: ({ alt, ...props }: HTMLProps<HTMLImageElement>) => {
    return (
      <span className='relative flex flex-col items-center justify-center'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...props}
          alt={alt}
          className={`
            rounded-md transition
            hover:scale-125
          `}
        />
        <span className='mt-2 text-center text-sm text-muted-foreground'>
          {alt}
        </span>
      </span>
    );
  },
  input: ({ checked, type, ...props }: HTMLProps<HTMLInputElement>) => {
    if (type === 'checkbox') {
      return <Checkbox checked={checked} disabled />;
    }
    return <input {...props} />;
  },
  Kbd,
  KbdGroup,
  ol: ({
    children,
    ...props
  }: DetailedHTMLProps<
    OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >) => (
    <ol
      className={`
        my-6 ml-6 list-decimal
        [&>li]:my-2
      `}
      {...props}
    >
      {children}
    </ol>
  ),
  p: ({ children, ...props }: HTMLProps<HTMLParagraphElement>) => (
    <p
      className={`
        not-first:my-6
        [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm
      `}
      {...props}
    >
      {children}
    </p>
  ),
  pre: ({ children, className, ...props }: HTMLProps<HTMLPreElement>) => (
    <figure className='my-6 rounded-md border bg-card p-4'>
      <pre
        {...props}
        className={clsx(
          'overflow-x-auto',
          'scrollbar-hidden',
          '[&_code]:text-sm',
          className
        )}
      >
        {children}
      </pre>
    </figure>
  ),
  table: ({ children, ...props }: HTMLProps<HTMLTableElement>) => (
    <figure className='my-6 scrollbar-hidden overflow-x-auto'>
      <table
        {...props}
        className={`
          w-full
          [&_code]:text-sm
        `}
      >
        {children}
      </table>
    </figure>
  ),
  td: ({ children, ...props }: HTMLProps<HTMLTableCellElement>) => (
    <td
      {...props}
      className={`
        border px-4 py-2 align-top
        [&_code]:text-sm
      `}
    >
      {children}
    </td>
  ),
  th: ({ children, ...props }: HTMLProps<HTMLTableCellElement>) => (
    <th
      {...props}
      className={`
        border px-4 py-2 font-bold
        [&_code]:text-sm
      `}
    >
      {children}
    </th>
  ),
  tr: ({ children, ...props }: HTMLProps<HTMLTableRowElement>) => (
    <tr
      {...props}
      className={`
        m-0 border-collapse border-t
        [&_code]:text-sm
      `}
    >
      {children}
    </tr>
  ),
  ul: ({ children, ...props }: HTMLProps<HTMLUListElement>) => (
    <ul
      className={`
        my-6 ml-6 list-disc
        [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm
        [&>li]:my-2
      `}
      {...props}
    >
      {children}
    </ul>
  ),
  wrapper: ({ children }: HTMLProps<HTMLDivElement>) => (
    <div
      className={`
        container mx-auto text-base text-foreground
        md:text-lg
      `}
    >
      {children}
    </div>
  ),
};
