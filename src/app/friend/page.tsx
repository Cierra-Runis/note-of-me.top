import Link from 'next/link';

import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function Page() {
  return (
    <section
      className={`
        flex h-full flex-col items-center justify-center gap-4 py-8
        md:py-10
      `}
    >
      <div className='flex gap-4'>
        <Link href='https://www.kablog.top' prefetch>
          <Avatar>
            <AvatarImage alt='Ka Blog' src='/avatar/ka.jpg' />
          </Avatar>
        </Link>
      </div>
    </section>
  );
}
