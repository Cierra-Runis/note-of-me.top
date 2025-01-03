import { siteConfig } from '@/config';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link';

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
