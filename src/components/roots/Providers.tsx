'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

import { Toaster } from '@/components/ui/sonner';

import Statistics from './Statistics';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Toaster />
      <Statistics />
      <NextThemesProvider attribute='class' enableSystem>
        {children}
      </NextThemesProvider>
    </>
  );
}
