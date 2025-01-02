import { siteConfig } from '@/config';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import NextLink from 'next/link';

export default function EmailButton() {
  return (
    <Button
      prefetch
      aria-label='Email'
      as={NextLink}
      href={siteConfig.links.email}
      size='sm'
      variant='light'
      target='_blank'
      isIconOnly
    >
      <EnvelopeIcon className='w-5' />
    </Button>
  );
}
