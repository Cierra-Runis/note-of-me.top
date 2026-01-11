'use client';

import { Post } from 'contentlayer/generated';
import { parseISO } from 'date-fns';
import NextLink from 'next/link';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
        <CardContent className='h-full'>
          <p className='line-clamp-3 text-sm break-all text-muted-foreground'>
            {post.body.raw}
          </p>
        </CardContent>
        <CardFooter className='flex flex-wrap justify-between gap-1'>
          <Badge variant='outline'>
            {parseISO(post.date).toLocaleString()}
          </Badge>
          <Badge variant='outline'>{`${post.wordCount} 字`}</Badge>
        </CardFooter>
      </Card>
    </NextLink>
  );
}
