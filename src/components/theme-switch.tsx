'use client';

import { FC } from 'react';
import { SwitchProps, useSwitch } from '@nextui-org/switch';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import { siteConfig } from '@/config/site';

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps['classNames'];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = () => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  const { isSelected } = useSwitch({
    isSelected: theme === 'light' || isSSR,
    'aria-label': `Switch to ${
      theme === 'light' || isSSR ? 'dark' : 'light'
    } mode`,
    onChange,
  });

  return (
    <Button
      aria-label='Github'
      href={siteConfig.author.url}
      size='sm'
      variant='light'
      isIconOnly
      onClick={onChange}
    >
      {!isSelected || isSSR ? (
        <SunIcon className='w-5' />
      ) : (
        <MoonIcon className='w-5' />
      )}
    </Button>
  );
};
