'use client';

import { Chip } from '@heroui/chip';
import { Post } from 'contentlayer/generated';
import { parseISO } from 'date-fns';
import NextLink from 'next/link';

export default function PostCard(post: Post) {
  return (
    <NextLink
      className='prose mb-8 flex max-w-full flex-col items-start justify-center gap-2 dark:prose-invert md:prose-lg lg:prose-xl'
      href={post.url}
      prefetch
    >
      <h2>{post.title}</h2>
      <div className='flex gap-1'>
        <Chip size='sm' variant='flat'>
          {parseISO(post.date).toUTCString()}
        </Chip>
        <Chip size='sm' variant='flat'>
          {`${post.wordCount} 字`}
        </Chip>
      </div>
      <p className='line-clamp-3 break-all [&>*:last-child]:mb-0 [&>*]:mb-3'>
        {post.body.raw}
      </p>
    </NextLink>
  );
}
