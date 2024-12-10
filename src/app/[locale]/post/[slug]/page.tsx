import { mdxComponents } from '@/config';
import '@/styles/markdown.css';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import 'katex/dist/katex.min.css';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { use } from 'react';

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
