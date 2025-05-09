'use client';

import { siteConfig } from '@/config';
import { Button } from '@heroui/button';
import { IconMail } from '@tabler/icons-react';
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
      <IconMail className='w-5' />
    </Button>
  );
}
