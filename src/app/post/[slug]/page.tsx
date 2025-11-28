import { allPosts } from 'contentlayer/generated';
import 'katex/dist/katex.min.css';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { use } from 'react';

import { CopyPageButton } from '@/components/buttons/CopyPageButton';
import { TocSidebar } from '@/components/roots/Toc';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
/// <https://contentlayer.dev/docs/sources/files/mdx>
import { mdxComponents } from '@/styles/markdown';
import { getHeadings } from '@/utils/heading';

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
    <SidebarProvider>
      <SidebarInset>
        <header
          className={`
            sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-y
            px-4 backdrop-blur-2xl
          `}
        >
          <h1 className='text-lg font-bold'>{post.title}</h1>
          <div className='flex flex-1 items-center justify-end gap-2 px-3'>
            <CopyPageButton code={post.body.raw} />
            <SidebarTrigger variant='outline' />
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4'>
          {/* eslint-disable-next-line react-hooks/static-components */}
          <MDXContent components={mdxComponents} />
        </div>
      </SidebarInset>
      <TocSidebar headings={headings} />
    </SidebarProvider>
  );
}
