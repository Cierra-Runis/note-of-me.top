import { siteConfig } from '@/config';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function EmailButton() {
  return (
    <Button
      aria-label='Email'
      as={Link}
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
