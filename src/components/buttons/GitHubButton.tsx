'use client';

import { siteConfig } from '@/config';
import { Link as NextLink } from '@/i18n/routing';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from '@nextui-org/button';

export default function GitHubButton() {
  return (
    <Button
      aria-label='Github'
      as={NextLink}
      href={siteConfig.author.url}
      isIconOnly
      prefetch
      size='sm'
      target='_blank'
      variant='light'
    >
      <SiGithub className='w-5' />
    </Button>
  );
}
