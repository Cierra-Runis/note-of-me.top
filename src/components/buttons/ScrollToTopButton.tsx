'use client';

import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ behavior: 'smooth', top: 0 });

  return (
    <motion.div
      animate={{
        opacity: showButton ? 1 : 0,
        visibility: showButton ? 'visible' : 'hidden',
      }}
      className='fixed bottom-12 right-6'
      initial={{ opacity: 0, visibility: 'hidden' }}
      transition={{ duration: 0.3 }}
    >
      <Button isIconOnly onPress={scrollToTop} size='sm' variant='ghost'>
        <ArrowUpIcon className='w-5' />
      </Button>
    </motion.div>
  );
}
