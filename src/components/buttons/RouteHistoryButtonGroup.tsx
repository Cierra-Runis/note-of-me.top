'use client';

import { useRouter } from '@/i18n/routing';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Button, ButtonGroup } from '@nextui-org/button';

export default function RouteHistoryButtonGroup() {
  const router = useRouter();

  return (
    <ButtonGroup>
      <Button isIconOnly onPress={router.back} size='sm' variant='light'>
        <ArrowLeftIcon className='w-5' />
      </Button>
      <Button isIconOnly onPress={router.forward} size='sm' variant='light'>
        <ArrowRightIcon className='w-5' />
      </Button>
    </ButtonGroup>
  );
}
