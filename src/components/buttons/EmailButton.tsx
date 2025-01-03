import { siteConfig } from '@/config';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link';

export default function EmailButton() {
  return (
    <Button
      aria-label='Email'
      as={NextLink}
      href={siteConfig.links.email}
      isIconOnly
      prefetch
      size='sm'
      target='_blank'
      variant='light'
    >
      <EnvelopeIcon className='w-5' />
    </Button>
  );
}
