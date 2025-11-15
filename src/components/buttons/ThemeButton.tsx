'use client';

import { MonitorSmartphoneIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Spinner } from '@/components/ui/spinner';

const __themes = {
  dark: {
    icon: <MoonIcon className='w-5' />,
    title: '暗色',
  },
  light: {
    icon: <SunIcon className='w-5' />,
    title: '亮色',
  },
  system: {
    // Default theme is light
    icon: <MonitorSmartphoneIcon className='w-5' />,
    title: '系统',
  },
};

type ThemeVariant = keyof typeof __themes;

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Popover aria-label='主题'>
        <PopoverTrigger asChild>
          <Button size='icon' variant='ghost'>
            <Spinner />
          </Button>
        </PopoverTrigger>
      </Popover>
    );
  }

  return (
    <Popover aria-label='主题'>
      <PopoverTrigger asChild>
        <Button size='icon' variant='ghost'>
          {__themes[(resolvedTheme || 'system') as ThemeVariant].icon}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='m-0 w-fit p-0'>
        <ButtonGroup>
          {Object.entries(__themes).map(([key, { icon, title }]) => (
            <Button
              aria-label={title}
              key={key}
              onClick={() => setTheme(key)}
              size='icon'
              variant={theme === key ? 'secondary' : 'ghost'}
            >
              {icon}
            </Button>
          ))}
        </ButtonGroup>
      </PopoverContent>
    </Popover>
  );
}
