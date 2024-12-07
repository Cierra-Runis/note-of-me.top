'use client';

import { useRouter } from '@/i18n/routing';
import { NextUIProvider } from '@nextui-org/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
