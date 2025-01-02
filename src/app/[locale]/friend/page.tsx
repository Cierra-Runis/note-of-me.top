import { Avatar } from '@nextui-org/avatar';
import NextLink from 'next/link';

export default function Page() {
  return (
    <section className='flex h-full flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='flex gap-4'>
        <NextLink prefetch href='https://www.kablog.top'>
          <Avatar src='/avatar/ka.jpg' name='咖酱' />
        </NextLink>
      </div>
    </section>
  );
}
