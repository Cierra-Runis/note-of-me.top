import {
  DeviceTabletIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { Button, ButtonGroup } from '@heroui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover';
import { CircularProgress } from '@heroui/progress';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
    icon: <DeviceTabletIcon className='w-5' />,
    title: '系统',
  },
};

type ThemeVariant = keyof typeof __themes;

export default function ThemeDropdown() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <CircularProgress size='sm' />;
  }

  return (
    <Popover aria-label='主题'>
      <PopoverTrigger>
        <Button
          isIconOnly
          size='sm'
          startContent={
            __themes[(resolvedTheme || 'system') as ThemeVariant].icon
          }
          variant='light'
        />
      </PopoverTrigger>
      <PopoverContent>
        <ButtonGroup>
          {Object.entries(__themes).map(([key, { icon, title }]) => (
            <Button
              aria-label={title}
              isIconOnly
              key={key}
              onPress={() => setTheme(key)}
              size='sm'
              startContent={icon}
              variant={theme === key ? 'solid' : 'light'}
            />
          ))}
        </ButtonGroup>
      </PopoverContent>
    </Popover>
  );
}
