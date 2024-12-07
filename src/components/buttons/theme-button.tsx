'use client';

import { siteConfig } from '@/config/site';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button, ButtonProps } from '@nextui-org/button';
import { useSwitch } from '@nextui-org/switch';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';

export function ThemeButton(props: ButtonProps) {
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
      {...props}
      aria-label='GitHub'
      href={siteConfig.author.url}
      size='sm'
      variant='light'
      isIconOnly
      onPress={onChange}
    >
      {!isSelected || isSSR ? (
        <SunIcon className='w-5 text-default-500' />
      ) : (
        <MoonIcon className='w-5 text-default-500' />
      )}
    </Button>
  );
}
