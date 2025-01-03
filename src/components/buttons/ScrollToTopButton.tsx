'use client';

import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <Button
      className={`fixed bottom-12 right-12 ${isShow ? 'flex' : 'hidden'}`}
      isIconOnly
      onPress={handleClick}
      size='sm'
      variant='ghost'
    >
      <ArrowUpIcon className='w-5 text-foreground-500' />
    </Button>
  );
}
