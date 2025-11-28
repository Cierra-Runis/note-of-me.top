'use client';

import { CopyIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

export function CopyPageButton({ code }: { code: string }) {
  return (
    <Button
      onClick={() => {
        navigator.clipboard
          .writeText(code.trim())
          .then(() => {
            toast.success('Copied Successfully!');
          })
          .catch(() => {
            toast.error(`Failed to Copy!`);
          });
      }}
      size='sm'
      variant='outline'
    >
      <CopyIcon /> Copy Page
    </Button>
  );
}
