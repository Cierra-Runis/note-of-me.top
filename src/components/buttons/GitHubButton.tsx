import { siteConfig } from '@/config';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link';

export default function GitHubButton() {
  return (
    <Button
      prefetch
      aria-label='Github'
      as={NextLink}
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
