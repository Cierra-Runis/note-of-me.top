import PostCard from '@/components/PostCard';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <section className='flex max-w-full flex-col gap-y-12'>
      <h1 className='mb-8 text-center text-3xl font-bold text-foreground-700 md:text-4xl lg:text-5xl'>
        文章
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </section>
  );
}
