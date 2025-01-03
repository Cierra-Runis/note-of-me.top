'use client';

import { redirect, routing, usePathname } from '@/i18n/routing';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

export default function LocaleButton() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <Dropdown
      aria-label={t('languages')}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <DropdownTrigger>
        <Button
          isIconOnly
          size='sm'
          startContent={<LanguageIcon className='w-5' />}
          variant='light'
        />
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => {
          setIsOpen(false);
          return redirect({
            href: { pathname: pathname },
            locale: key as string,
          });
        }}
        selectedKeys={[locale]}
        selectionMode='single'
      >
        {routing.locales.map((key) => (
          <DropdownItem key={key} title={t(`locales.${key}`)} />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
