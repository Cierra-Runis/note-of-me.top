'use client';

import NextLink from 'next/link';

import { Button } from '@/components/ui/button';
import { Technical } from '@/config';

type TechnicalButtonProps = { technical: Technical } & React.ComponentProps<
  typeof Button
>;

export default function TechnicalButton({
  technical,
  ...props
}: TechnicalButtonProps) {
  return (
    <Button
      asChild
      // className={`
      //   col-span-2 max-h-12 w-full object-contain
      //   lg:col-span-1
      // `}
      variant='ghost'
      {...props}
    >
      <NextLink href={technical.url} prefetch>
        {technical.icon}
        {technical.name}
      </NextLink>
    </Button>
  );
}
