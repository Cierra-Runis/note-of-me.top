import { siteConfig } from '@/config';
import { Link as NextLink } from '@/i18n/routing';

import EmailButton from '../buttons/EmailButton';
import GitHubButton from '../buttons/GitHubButton';

export default function Footer() {
  return (
    <footer className='flex w-full items-center justify-between p-6 py-3 text-sm'>
      <NextLink
        className='flex items-center gap-2'
        href={siteConfig.author.url}
        prefetch
      >
        <span className='text-default-600'>Powered by</span>
        <p className='text-primary'>Cierra Runis</p>
      </NextLink>
      <div className='flex items-center gap-2'>
        <GitHubButton />
        <EmailButton />
      </div>
    </footer>
  );
}
