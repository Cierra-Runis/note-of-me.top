'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

const __icons = {
  dark: <MoonIcon className='w-5' />,
  light: <SunIcon className='w-5' />,
  // Default theme is light
  system: <SunIcon className='w-5' />,
};

type Theme = keyof typeof __icons;

export default function ThemeDropdown() {
  const t = useTranslations();

  const { resolvedTheme, setTheme, theme } = useTheme();

  return (
    <Dropdown aria-label={t('theme.title')}>
      <DropdownTrigger>
        <Button
          isIconOnly
          size='sm'
          startContent={__icons[(resolvedTheme || 'system') as Theme]}
          variant='light'
        />
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => setTheme(key as string)}
        selectedKeys={[theme || 'system']}
        selectionMode='single'
      >
        {Object.keys(__icons).map((key) => (
          <DropdownItem key={key} title={t(`theme.${key}`)} />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
