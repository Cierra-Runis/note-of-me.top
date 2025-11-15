'use client';

import { ArrowUpIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ behavior: 'smooth', top: 0 });

  return (
    <div
      aria-hidden={!showButton}
      className={cn(
        'fixed right-6 bottom-6 z-10 transition-all duration-300',
        showButton
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      <Button onClick={scrollToTop} size='icon' variant='outline'>
        <ArrowUpIcon />
      </Button>
    </div>
  );
}
