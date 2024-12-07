import GitHubButton from '../buttons/GitHubButton';
import { siteConfig } from '@/config';
import { Link } from '@nextui-org/link';

export default function Footer() {
  return (
    <footer className='flex w-full items-center justify-between p-6 py-3 text-sm'>
      <Link className='flex items-center gap-2' href={siteConfig.author.url}>
        <span className='text-default-600'>Powered by</span>
        <p className='text-primary'>Cierra Runis</p>
      </Link>
      <div>
        <GitHubButton />
      </div>
    </footer>
  );
}
