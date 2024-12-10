import MarkdownImage from '@/components/MarkdownImage';
import '@/styles/markdown.css';
import { Checkbox } from '@nextui-org/checkbox';
import { Code } from '@nextui-org/code';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import 'katex/dist/katex.min.css';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { HTMLProps, use } from 'react';

/// TODO: Implement <Unicode/> component
function Unicode(props: { code: string }) {
  return <Code color='danger'>{props.code}</Code>;
}

/**
 *  {@link React.JSX.IntrinsicElements}
 */
const mdxComponents: MDXComponents = {
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
  img: ({ src, alt, children, ...props }) => (
    <MarkdownImage
      src={src}
      alt={alt}
      {...props}
      isBlurred
      isZoomed
      className='mx-auto'
    >
      {children}
    </MarkdownImage>
  ),
  input: ({ checked, type, ...props }: HTMLProps<HTMLInputElement>) => {
    if (type === 'checkbox') {
      return <Checkbox isDisabled defaultSelected={checked} />;
    }
    return <input {...props} />;
  },
  table: ({ children, ...props }) => (
    <div className='overflow-auto'>
      <table {...props}>{children}</table>
    </div>
  ),
  Kbd,
  Unicode,
  Snippet,
};

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) return { notFound: true };

  return {
    title: post.title,
  };
}

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <div className='mb-8 text-center'>
        <strong className='mb-1 text-secondary-600'>
          {/* TODO: I18n */}
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </strong>
        <h1>{post.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
    </div>
  );
}
