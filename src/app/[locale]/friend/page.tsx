import { Link as NextLink } from '@/i18n/routing';
import { Avatar } from '@nextui-org/avatar';

export default function Page() {
  return (
    <section className='flex h-full flex-col items-center  justify-center gap-4 py-8 md:py-10'>
      <div className='flex gap-4'>
        <NextLink href='https://www.kablog.top' prefetch>
          <Avatar name='咖酱' src='/avatar/ka.jpg' />
        </NextLink>
      </div>
    </section>
  );
}
