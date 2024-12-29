'use client';

import { siteConfig } from '@/config';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

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
      <SiGithub className='w-5' />
    </Button>
  );
}
