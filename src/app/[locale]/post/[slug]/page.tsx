import { Code } from '@nextui-org/code';
import { Image } from '@nextui-org/image';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
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
  a: ({ href, children }: HTMLProps<HTMLAnchorElement>) => (
    <Link href={href}>{children}</Link>
  ),
  img: ({ src, alt, children, ...props }) => (
    <Image src={src} alt={alt} {...props} isBlurred>
      {children}
    </Image>
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
