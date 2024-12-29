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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      className={`fixed bottom-12 right-12 ${isShow ? 'flex' : 'hidden'}`}
      onPress={handleClick}
      size='sm'
      variant='ghost'
      isIconOnly
    >
      <ArrowUpIcon className='w-5 text-foreground-500' />
    </Button>
  );
}
