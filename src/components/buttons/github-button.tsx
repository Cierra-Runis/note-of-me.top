'use client';

import { siteConfig } from '@/config/site';
import { Link } from '@/i18n/routing';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from '@nextui-org/button';

export default function GitHubButton() {
  return (
    <Button
      aria-label='Github'
      as={Link}
      href={siteConfig.author.url}
      size='sm'
      variant='light'
      target='_blank'
      isIconOnly
    >
      <SiGithub className='w-5 text-default-500' />
    </Button>
  );
}
