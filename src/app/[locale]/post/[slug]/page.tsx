'use server';

import { allPosts, Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react';

export type PostPageParams = Promise<{
  slug: string;
}>;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = async ({
  params,
}: {
  params: PostPageParams;
}): Promise<Metadata> => {
  const { slug } = await params;

  const post: Post | undefined = allPosts.find(
    (post) => post._raw.flattenedPath === slug,
  );

  return { title: post?.title };
};

export default async function PostPage({ params }: { params: PostPageParams }) {
  const { slug } = await params;

  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (post === undefined) return redirect('/404');

  return (
    <div>
      <div className='mb-8 text-center'>
        <time dateTime={post.date} className='mb-1 text-xs text-gray-600'>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
      </div>
      <div
        className='[&>*]:mb-3 [&>*:last-child]:mb-0'
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}
