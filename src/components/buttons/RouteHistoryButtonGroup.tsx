'use client';

import { Button, ButtonGroup } from '@heroui/button';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function RouteHistoryButtonGroup() {
  const router = useRouter();

  return (
    <ButtonGroup>
      <Button isIconOnly onPress={router.back} size='sm' variant='light'>
        <IconArrowLeft className='w-5' />
      </Button>
      <Button isIconOnly onPress={router.forward} size='sm' variant='light'>
        <IconArrowRight className='w-5' />
      </Button>
    </ButtonGroup>
  );
}
