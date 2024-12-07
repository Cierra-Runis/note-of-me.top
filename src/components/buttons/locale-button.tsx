'use client';

import { redirect, routing, usePathname, useRouter } from '@/i18n/routing';
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
          size='sm'
          variant='light'
          startContent={<LanguageIcon className='w-5 text-default-500' />}
          isIconOnly
        />
      </DropdownTrigger>
      <DropdownMenu
        selectedKeys={[locale]}
        selectionMode='single'
        onAction={(key) => {
          setIsOpen(false);
          return redirect({
            locale: key as string,
            href: { pathname: pathname },
          });
        }}
      >
        {routing.locales.map((key) => (
          <DropdownItem key={key} title={t(`locales.${key}`)} />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
