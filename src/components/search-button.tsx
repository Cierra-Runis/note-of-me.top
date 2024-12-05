import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';

export default function SearchButton() {
  return (
    <Button aria-label='Github' size='sm' variant='light' isIconOnly>
      <MagnifyingGlassIcon className='w-5 text-default-500' />
    </Button>
  );
}
