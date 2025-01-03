import { DocsToc } from '@/components/roots/Toc';
import { mdxComponents } from '@/styles/markdown';
import '@/styles/markdown.css';
import { getHeadings } from '@/utils/heading';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import 'katex/dist/katex.min.css';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { use } from 'react';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) return { title: '404' };

  return {
    title: post.title,
  };
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);
  const headings = getHeadings(post.body.raw);

  return (
    <section className='grid grid-cols-6 gap-4'>
      <article className='prose col-span-full max-w-full dark:prose-invert md:prose-lg lg:prose-xl lg:col-span-5'>
        <div className='mb-8 text-center'>
          <strong className='mb-1 text-secondary-600'>
            {/* TODO: I18n */}
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </strong>
          <h1>{post.title}</h1>
        </div>
        <MDXContent components={mdxComponents} />
      </article>
      <aside className='relative hidden lg:flex'>
        <DocsToc headings={headings} />
      </aside>
    </section>
  );
}
