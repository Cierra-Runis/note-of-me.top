'use client';

import { CopyIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function CopyPageButton({ code }: { code: string }) {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(code);
      }}
      size='sm'
      variant='outline'
    >
      <CopyIcon /> Copy Page
    </Button>
  );
}
