'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';

export default function SearchButton() {
  return (
    <Button
      aria-label='Search'
      size='sm'
      variant='light'
      isIconOnly
      onPress={() => {}}
    >
      <MagnifyingGlassIcon className='w-5 text-default-500' />
    </Button>
  );
}
