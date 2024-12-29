'use client';

import { useRouter } from '@/i18n/routing';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button, ButtonGroup } from '@nextui-org/button';

export default function RouteHistoryButtonGroup() {
  const router = useRouter();

  return (
    <ButtonGroup>
      <Button isIconOnly size='sm' variant='light' onPress={router.back}>
        <ArrowLeftIcon className='w-5 text-default-500' />
      </Button>
      <Button isIconOnly size='sm' variant='light' onPress={router.forward}>
        <ArrowRightIcon className='w-5 text-default-500' />
      </Button>
    </ButtonGroup>
  );
}
