import { Link } from '@nextui-org/link';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { useTranslations } from 'next-intl';

function PostCard(post: Post) {
  return (
    <Link
      className='mb-8 flex flex-col items-start justify-center'
      href={post.url}
    >
      <h2 className='mb-1'>{post.title}</h2>
      <time dateTime={post.date} className='mb-2 block text-foreground-600'>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className='line-clamp-3 break-all text-foreground-500 [&>*:last-child]:mb-0 [&>*]:mb-3'>
        {post.body.raw}
      </div>
    </Link>
  );
}

export default function Posts() {
  const t = useTranslations();
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <section className='flex flex-col gap-y-12'>
      <h1 className='mb-8 text-center'>{t('post')}</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </section>
  );
}
