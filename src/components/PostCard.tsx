'use client';

import { Link as NextLink } from '@/i18n/routing';
import { Chip } from '@heroui/chip';
import { Post } from 'contentlayer/generated';
import { parseISO } from 'date-fns';
import { useFormatter, useTimeZone, useTranslations } from 'next-intl';

export default function PostCard(post: Post) {
  const t = useTranslations();
  const format = useFormatter();
  const tz = useTimeZone();

  return (
    <NextLink
      className='prose mb-8 flex max-w-full flex-col items-start justify-center gap-2 dark:prose-invert md:prose-lg lg:prose-xl'
      href={post.url}
      prefetch
    >
      <h2>{post.title}</h2>
      <div className='flex gap-1'>
        <Chip size='sm' variant='flat'>
          {format.dateTime(parseISO(post.date), {
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            month: '2-digit',
            timeZone: tz,
            timeZoneName: 'long',
            year: 'numeric',
          })}
        </Chip>
        <Chip size='sm' variant='flat'>
          {t('wordCount', { count: post.wordCount })}
        </Chip>
      </div>
      <p className='line-clamp-3 break-all [&>*:last-child]:mb-0 [&>*]:mb-3'>
        {post.body.raw}
      </p>
    </NextLink>
  );
}
