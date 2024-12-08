import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

function PostCard(post: Post) {
  return (
    <div className='mb-8'>
      <h2 className='mb-1 text-xl'>
        <Link href={post.url}>{post.title}</Link>
      </h2>
      <time
        dateTime={post.date}
        className='mb-2 block text-xs text-foreground-600'
      >
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className='text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 line-clamp-3'>
        {post.body.code}
      </div>
    </div>
  );
}

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <section>
      <h1 className='mb-8 text-center text-2xl font-black'>
        Next.js + Contentlayer Example
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </section>
  );
}
