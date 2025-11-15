'use client';

import { Post } from 'contentlayer/generated';
import { parseISO } from 'date-fns';
import NextLink from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PostCard(post: Post) {
  return (
    <NextLink className='block h-full' href={post.url} prefetch>
      <Card
        className={`
          h-full transition-shadow
          hover:shadow-md
        `}
      >
        <CardHeader>
          <CardTitle className='text-lg'>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='mb-3 flex flex-wrap gap-1 text-xs'>
            <Badge>{parseISO(post.date).toUTCString()}</Badge>
            <Badge>{`${post.wordCount} 字`}</Badge>
          </div>
          <p className='line-clamp-3 text-sm break-all text-muted-foreground'>
            {post.body.raw}
          </p>
        </CardContent>
      </Card>
    </NextLink>
  );
}
