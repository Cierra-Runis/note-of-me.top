import { Code } from '@nextui-org/code';
import { Link } from '@nextui-org/link';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { use } from 'react';

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
  code: ({ children }) => <Code color='secondary'>{children}</Code>,
  MyComponent: () => <div>Hello World!</div>,
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
        <time dateTime={post.date} className='mb-1 text-xs text-secondary-600'>
          {
            /// TODO: I18n
            format(parseISO(post.date), 'LLLL d, yyyy')
          }
        </time>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
    </div>
  );
}
