'use client';

import { redirect, routing, usePathname } from '@/i18n/routing';
import { LanguageIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useLocale, useTranslations } from 'next-intl';

export default function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          size='sm'
          variant='light'
          startContent={<LanguageIcon className='text-default-500 w-5' />}
          isIconOnly
        />
      </DropdownTrigger>
      <DropdownMenu
        selectedKeys={[locale]}
        selectionMode='single'
        onAction={(key) =>
          redirect({ locale: key as string, href: { pathname: pathname } })
        }
      >
        {routing.locales.map((key) => (
          <DropdownItem key={key} title={t(`locales.${key}`)} />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
