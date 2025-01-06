'use client';

import { Technical } from '@/config';
import { Link as NextLink } from '@/i18n/routing';
import { Button, ButtonProps } from '@nextui-org/button';

type TechnicalButtonProps = { technical: Technical } & ButtonProps;

export default function TechnicalButton({
  technical,
  ...props
}: TechnicalButtonProps) {
  return (
    <Button
      as={NextLink}
      className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
      href={technical.url}
      prefetch
      startContent={technical.icon}
      variant='light'
      {...props}
    >
      {technical.name}
    </Button>
  );
}
