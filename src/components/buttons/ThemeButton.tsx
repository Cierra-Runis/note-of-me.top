'use client';

import { siteConfig } from '@/config';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button, ButtonProps } from '@nextui-org/button';
import { useSwitch } from '@nextui-org/switch';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';

export default function ThemeButton(props: ButtonProps) {
  const { setTheme, theme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  const { isSelected } = useSwitch({
    'aria-label': `Switch to ${
      theme === 'light' || isSSR ? 'dark' : 'light'
    } mode`,
    isSelected: theme === 'light' || isSSR,
    onChange,
  });

  return (
    <Button
      {...props}
      aria-label='GitHub'
      href={siteConfig.author.url}
      isIconOnly
      onPress={onChange}
      size='sm'
      variant='light'
    >
      {!isSelected || isSSR ? (
        <SunIcon className='w-5' />
      ) : (
        <MoonIcon className='w-5' />
      )}
    </Button>
  );
}
