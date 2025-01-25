'use client';

import { useRouter } from '@/i18n/routing';
import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider attribute='class' enableSystem>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
