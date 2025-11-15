import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import PostCard from '@/components/PostCard';
import { SidebarInset } from '@/components/ui/sidebar';

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <SidebarInset>
        <main
          className={`container mx-auto flex grow flex-col gap-y-12 px-6 pt-16`}
        >
          <h1
            className={`
              text-center text-3xl font-bold text-primary
              md:text-4xl
              lg:text-5xl
            `}
          >
            文章
          </h1>
          <div
            className={`
              mb-8 grid gap-6
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
            `}
          >
            {posts.map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </main>
      </SidebarInset>
    </>
  );
}
